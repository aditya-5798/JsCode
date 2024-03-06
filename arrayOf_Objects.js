var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    let displayArrayOfObject=function(arr)
    {
        console.log(arr);
        for(let i in arr)
        {
            console.log(library[i].author+" "+library[i].title);
        }

    }

    let a=displayArrayOfObject(library);