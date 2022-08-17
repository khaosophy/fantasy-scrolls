import NumberField from "./NumberField";

export default {
  title: 'Number Field',
  component: NumberField,
}

const NumberFieldTemplate = (args) => <NumberField {...args} />

export const Basic = NumberFieldTemplate.bind({});
Basic.args = {
  id: "basicNumberField",
  label: "Enter a Number",
  onChange: () => {},
}