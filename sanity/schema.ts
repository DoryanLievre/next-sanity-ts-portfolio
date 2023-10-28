import { type SchemaTypeDefinition } from 'sanity'
import pageInfo from './schemas/pageInfo'
import experience from "./schemas/experience";
import project from "./schemas/project";
import skill from "./schemas/skill";
import social from "./schemas/social";
import study from "./schemas/study";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [social,pageInfo,experience,study,skill,project],
}
