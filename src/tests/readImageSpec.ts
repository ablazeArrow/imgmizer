import resize from '../utilities/resize';

describe('resizing image', async () => {
  it('resize image with width and height provided.', (next: () => void) => {
    expect(
      resize(
        100,
        100,
        `assets/full/fjord.jpg`,
        `assets/thumb/`,
        `360x200-fjord.jpg`,
        next
      )
    ).toBeTruthy();
  });
});
