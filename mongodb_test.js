var mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://root:1234@kblockchain.q86chqg.mongodb.net/?retryWrites=true&w=majority',
    {
    //   useNewUrlPaser: true,
    //   useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
    console.log(err);
  });


  var student = mongoose.Schema({
    name : 'string',
    address : 'string',
    age : 'number'
});


// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
var Student = mongoose.model('Schema', student);

// 8. Student 객체를 new 로 생성해서 값을 입력
var newStudent = new Student({name:'Hong Gil Dong', address:'서울시 강남구 논현동', age:'22'});

// 9. 데이터 저장
// newStudent.save()
// .then(result=>{
//     console.log(result)
// });


Student.find()
.then(function(error, students){
    console.log('--- Read all ---');
    if(error){
        console.log(error);
    }else{
        console.log(students);
    }
})