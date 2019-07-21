import styled from "styled-components";

import BasicLayout from "../components/common/BasicLayout";
import Directive from "../components/common/Directive";

import Cipher from "vignere-babbage-cipher";

const CipherTool = styled.div`
  max-width: 900px;
  margin: 30px auto 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${props=> props.theme.aqua};
  box-shadow: 0 0 0 10px ${props=> props.theme.abyss};
  background-color: ${props=> props.theme.deepAbyss};

  @media (max-width: 600px) {
    margin: 10px;
  }
`;

const CipherStep = styled.div`
  grid-row: 1;
  grid-column: 1;
  background: green;
  font-size: 24px;
  line-height: 1.4em;
  font-family: ${props => props.theme.plex};
  text-transform: uppercase;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center right 20px;
  color: white;
  padding: 0;
  border-bottom: 1px solid ${props=> props.theme.aqua};
  position: relative;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  &:first-child {
    border-radius: 10px 10px 0 0;
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 10px 10px;
  }

  label {
    display: block;
    padding: 1em 1em .5em 1em;
    font-size: 14px;
    color: ${props => props.theme.turquoise};
    line-height: 1em;
  }

  input, textarea {
    width: 100%;
    margin: .5em 0;
    padding: 0 1em;
    background: transparent;
    border: none;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    resize: vertical;
    line-height: 1.4em;

    ::selection {
      background-color: ${props=> props.theme.sapphire};
      color: ${props=> props.theme.abyss};
    }

    ::placeholder {
      color: ${props=> props.theme.turquoise};
    }
  }

  textarea {
    min-height: 100px;
    margin-bottom: 0;
    padding-bottom: .5em;
  }

  &.encrypt:after {
    content: '';
    display: block;
    background-image: url(/static/images/icons/arrow.svg);
    width: 64px;
    height: 64px;
    position: absolute;
    top: 15px;
    right: 15px;
    transition: transform cubic-bezier(0.680, -0.550, 0.265, 1.550) .5s;
  }

  &.decrypt:after {
    content: '';
    display: block;
    background-image: url(/static/images/icons/arrow.svg);
    width: 64px;
    height: 64px;
    position: absolute;
    top: 15px;
    right: 15px;
    transition: transform cubic-bezier(0.680, -0.550, 0.265, 1.550) .5s;
    transform: rotate(180deg);
  }
`;

class CipherPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cipherText: '',
      keyString: '',
      plainText: '',
      mode: 0 // 0 if encrypt, 1 for decrypt
    }
    this.changeMode = this.changeMode.bind(this);
    this.handlePlainText = this.handlePlainText.bind(this);
    this.handleCipherText = this.handleCipherText.bind(this);

    let input, output;
  }

  scrub(input) {
    return input.toUpperCase().replace(/[^A-Z]/g, '')
  }
  
  changeMode(event, mode) {
    this.setState({
      mode: mode
    });
  }

  handlePlainText(event) {
    let scrubbed = this.scrub(event.target.value);
    this.setState({
      plainText: scrubbed,
      cipherText: Cipher.encrypt(scrubbed, this.state.keyString)
    });
  }

  handleCipherText(event) {
    let scrubbed = this.scrub(event.target.value);
    this.setState({
      cipherText: scrubbed,
      plainText: Cipher.decrypt(scrubbed, this.state.keyString)
    });
  }

  handleKeyString(event) {
    let scrubbed = this.scrub(event.target.value);
    this.setState({
      keyString: scrubbed
    });

    if(scrubbed.length > 0) {
      if(this.state.mode == 0) {
        this.setState({
          cipherText: Cipher.encrypt(this.state.plainText, scrubbed)
        });
      } else {
        this.setState({
          plainText: Cipher.decrypt(this.state.cipherText, scrubbed)
        })
      }
    }
  }

  render() {
    return (
      <BasicLayout>
      <Directive>THE/OWLS/ARE/NOT/WHAT/THEY/SEEM</Directive>
      <CipherTool>
        <CipherStep>
          <label for="ciphertext">Cipher Text &gt;&gt;</label>
          <textarea 
            name="ciphertext" type="text" 
            value={this.state.cipherText} 
            placeholder="ENCRYPTED_TEXT_HERE" 
            onChange={(e)=> {this.handleCipherText(e)}}
            onFocus={(e)=> {this.changeMode(e, 1)}}
          />
        </CipherStep>
        <CipherStep className={this.state.mode ? 'decrypt' : 'encrypt'}>
          <label for="keystring">Key &gt;&gt;</label> 
          <input name="keystring" type="text" 
            value={this.state.keyString} 
            placeholder="SECRET_KEY_HERE" 
            onChange={(e)=> this.handleKeyString(e)} 
          />
        </CipherStep>
        <CipherStep>
          <label for="plaintext">Plain Text &gt;&gt;</label>
          <textarea name="plaintext" type="text" 
            value={this.state.plainText} 
            placeholder="DECRYPTED_MESSAGE_HERE"
            onChange={(e)=> {this.handlePlainText(e)}}
            onFocus={(e)=> {this.changeMode(e, 0)}}
          />
        </CipherStep>
      </CipherTool>
    </BasicLayout>
    );
  }
};

export default CipherPage;