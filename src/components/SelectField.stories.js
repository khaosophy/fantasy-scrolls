import SelectField from "./SelectField";

export default {
  title: 'Select Field',
  component: SelectField,
}

const SelectTemplate = (args) => <SelectField {...args} />

export const Basic = SelectTemplate.bind({});
Basic.args = {
  id: "basicSelectField",
  label: "Select Something",
  options: [
    {
      value: 1,
      label: 'First Thing',
    },
    {
      value: 2,
      label: 'Second Thing',
    },
  ],
  value: 0,
  onChange: () => {},
}