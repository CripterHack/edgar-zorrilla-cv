/* eslint-disable */
import { Selector, ClientFunction } from 'testcafe';

fixture `Resumes`
  .page `http://localhost:8080/#/`;

let resumes;

test('Click on pdf should open url', async t => {
  /* const r = await getResumeNames();
  await t.expect(r.length).gt(0);
  for(const resume of r) {
    const s = '.page#' + resume;
    await t
    .navigateTo('http://localhost:8080/#/resume/' + resume)
    .expect(Selector(s)).ok()
    .expect(Selector(s + ' *').withText('John Doe')).ok();
  } */
});
