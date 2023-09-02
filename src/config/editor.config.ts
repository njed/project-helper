import { FeatureTypes } from '../constants';
import { FeatureConfig } from '../../typings';

const config: FeatureConfig = {
  name: FeatureTypes.editor,
  filename: '.editorconfig',
  dependencies: [],
  scripts: [],
  content: `
root = true

[*]
indent_style = space
indent_size = 4
trim_trailing_whitespace = true
end_of_line = lf
insert_final_newline = true
  `,
};
export default config;
