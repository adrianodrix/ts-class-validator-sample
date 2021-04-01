import { IsOptional, Equals, Validator } from 'class-validator-multi-lang';

class MyClass {
  @IsOptional()
  @Equals('test')
  title: string = 'bad_value';
}

const RU_I18N_MESSAGES = {
  '$property must be equal to $constraint1': '$property должно быть равно $constraint1',
};
const RU_I18N_TITLES = {
  test: '"тест"',
};

const model = new MyClass();
const validator = new Validator()

validator.validate(model, { messages: RU_I18N_MESSAGES, titles: RU_I18N_TITLES }).then(errors => {
  console.log(errors[0].constraints);
  // out: title должно быть равно "тест"
});
