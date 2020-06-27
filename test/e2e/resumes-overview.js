/* eslint-disable */
import { Selector, ClientFunction } from 'testcafe';

fixture `Resumes Overview`
  .page `http://localhost:8080/#/`;


test('Resumes overview appears', async t => {
    await t.expect(Selector('h3').innerText).eql('edgar-zorrilla-cv');
});

/* test('There is at least one resume preview', async t => {
    await t.expect(Selector('.previews .preview').count).gt(1);
}); */
