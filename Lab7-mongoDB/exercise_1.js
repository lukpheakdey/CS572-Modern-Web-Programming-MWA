
//Book collection
{
    _id: ObjectId(),
    isbn: '0001', // use it as ID
    author: 'David',
    tag: ['keyword1','keyword2'],
    borrowedBy:[
        {student:'A', borrowedDate: '', returnDate: ''},
        {student:'B', borrowedDate: '', returnDate: ''}
    ]
}

//Author Collection
{
    author:''
}

// Student Collection
{
    student:''
}