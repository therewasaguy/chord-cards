var Theory = {
	major : [0, 2, 4, 5, 7, 9, 11],
  major3rds : [4,5,7,9,11,12,14],
  major5ths : [7,9,11,12,14,16,17],
  minor : [0, 2, 3, 5, 7, 8, 10],
  minor3rds : [3,5,7,8,10,12,14],
  minor5ths : [7,8,10,12,14,15,17],
  mnPent : [0, 3, 5, 7, 10],
  MjPent : [0, 2, 4, 7, 9],
  blues : [0,3,5,6,7,10],
  wholeTone : [0,2,4,6,8,10],
  harmMinor : [0,2,3,5,7,8,11],
  hMinor3rds : [3,5,7,8,11,12,14],
  hMinor5ths : [7,8,10,12,14,15,17],
	naturalMinor: [0,2,3,5,7,8,10],
	melodicMinor: [0,2,3,5,7,9,11],
	mixolydian: [0,2,4,5,7,9,10],

  triadOffsets: [0, 2, 4],
  // triadOffsets: [2, 4, 7],
  // triadOffsets: [4, 7, 9],


	key: undefined,
	root: undefined,

	init: function() {
		this.key = this.major;
		this.root = 72
	}
}

Theory.init();