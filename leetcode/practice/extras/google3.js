/*

Suppose we have a movie, consisting of a series of frames.
We also have a set of subtitles that need to display along with the movie.

Assuming that a subtitle image processing library has already been provided (API example provided below),
Could you write a function or library to help match individual subtitles with their corresponding video frames?

Image processing example for rendering subtitles:

// Assume this is already implemented.
ImageUtil.renderSubtitle(video_frame, subtitle_text);

*/

// ranges: [[0,8],[6,9]]
// subtitles: ['text1','text2']

// {
//   start: 0,
//   end: 8,
//   subtitle: 'text1'
// }

// text1 text2

// ['text1','text1',]

// N: total number of frames
var Subtitle = function (N, subtitleRanges) {
  this.subtitleRanges((a, b) => a.start - b.start);
  this.subtitles = new Array(N).fill("");
  for (const subRange of subtitleRanges) {
    for (let i = subRange.start; i <= subRange.end; i++) this.subtitles[i] += subRange.subtitle;
  }
};

Subtitle.protototype.getFrameSubtitle = function (frame) {
  return this.subtitles[frame];
};

/**
  N: total number of frames
  frames: list of frames
  subtitleRanges: range of frames for subtitles
**/
var renderSubtitle = function (N, frames, subtitleRanges) {
  const subtitle = new Subtitle(N, subtitleRanges);
  frames.forEach((frame) => {
    ImageUtil.renderSubtitle(video_frame, subtitle.getFrameSubtitle(frame));
  });
};
