import TextField from "./TextField";

export default {
  title: 'Text Field',
  component: TextField,
}

const TextFieldTemplate = (args) => <TextField {...args} />

export const Basic = TextFieldTemplate.bind({});
Basic.args = {
  id: "basicTextField",
  label: "Type Something...",
  onChange: () => {},
}