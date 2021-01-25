import { BookFilterPipe } from './book-filter.pipe';

describe('BoolFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
