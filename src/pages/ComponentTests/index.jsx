import ButtonsTests from './Buttons';
import './index.css'
import InputsTests from "./Inputs";

export default function ComponentTests() {
    return (
        <div id="componenttests">
            <InputsTests/>
            <ButtonsTests/>
        </div>
    );
}