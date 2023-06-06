addEventListener("load", (event) => {

  console.log('yay')
});

let data = [
  {
    name: '1',
    array: [
      {tag: 'tag1'},
      {tag: 'tag2'}
    ]
  },
  {
    name: '2',
    array: [
      {tag: 'tag3'},
      {tag: 'tag4'}
    ]
  },
  {
    name: '3',
    array: [
      {tag: 'tag1'},
      {tag: 'tag2'}
    ]
  },
  {
    name: '4',
    array: [
      {tag: 'tag1'},
      {tag: 'tag2'}
    ]
  },
  {
    name: '5',
    array: [
      {tag: 'tag1'},
      {tag: 'tag2'}
    ]
  },
]


let Articles = []
let News = []
const SampleFunction = async () => {
  
  await data.forEach((underData) => {
    let foundTag = underData.array.find((arry) => arry.tag ==='tag1' )
    if(foundTag) {
      Articles.push(underData)
    }
  })
}

SampleFunction()
console.log(Articles)