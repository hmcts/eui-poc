import { CaseIdPipe } from './case-id.pipe';

describe('CaseIdPipe', () => {
  it('create an instance', () => {
    const pipe = new CaseIdPipe();
    expect(pipe).toBeTruthy();
  });
  it ('should correctly format a 16 digit string', () => {
    const input = '1111222233334444'
    const pipe = new CaseIdPipe();
    let  output = pipe.transform(input);
    expect(output).toEqual('1111-2222-3333-4444');
  })
});
