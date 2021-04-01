import { validateOrReject } from 'class-validator-multi-lang'
import { Post, PostType } from './dtos/Post.dto'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { Console } from 'node:console'

const PT_I18N_MESSAGES = JSON.parse(readFileSync(resolve(__dirname, '..','node_modules/class-validator-multi-lang/i18n/pt.json')).toString())

const post = new Post()
post.title = 'Hello' // should not pass
post.text = 'this is a great post about hell world' // should not pass
post.rating = 11 // should not pass
post.email = 'google.com' // should not pass
post.site = 'googlecom' // should not pass
post.type = PostType.Private // should pass

validateOrRejectExample(post)
async function validateOrRejectExample(input: any) {
  try {
    await validateOrReject(input, { messages: PT_I18N_MESSAGES, validationError: { target: false, value: false } });
  } catch (errors) {
    console.log('Caught promise rejection (validation failed). Errors: ', errors);
  }
}
