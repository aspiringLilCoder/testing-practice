import analyzeArray  from './../code/analyzeArray.js'


test(':>', () => {
    expect(analyzeArray ([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});

test(':>', () => {
    expect(analyzeArray ([1,2,3])).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
      })
});


test(':>', () => {
    expect(analyzeArray ([2,5,8,14])).toEqual({
        average: 7.25,
        min: 2,
        max: 14,
        length: 4
      })
});


test(':>', () => {
    expect(analyzeArray ([5, 2, 9, 0, 3])).toEqual({
        average: 3.8,
        min: 0,
        max: 9,
        length: 5
      });
});
