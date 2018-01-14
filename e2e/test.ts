import { Selector } from 'testcafe'

fixture('Hello')
  .page('localhost:8080')

test('Page contains "Hello world!"', async t => {
  const Header = Selector('h1')

  await t
    .expect(Header.innerText).eql('Hello world!')
})

test.page('localhost:8080/#/test')('Shows error page when in non-existing route', async t => {
  const Header = Selector('h1')

  await t
   .expect(Header.innerText).eql('Error 404')
})
