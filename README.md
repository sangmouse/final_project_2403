Các chức năng của final project:

- Login(done)
- Logout(done)
- User List (done)
- Create new user
- Update user
- Delete user (done)
- Paging
- Sorting
- Filter

  User:

  - ID : string
  - First name : string
  - Last name : string
  - Address : string
  - Age : number
  - Department : string

1. Login page

- validate form:

  - bắt nhập đầy đủ thông tin, thiếu 1 trong 2 field thì hiện message thông báo (done)
  - nếu account không đúng => hiện message thông báo(done)
  - check thông tin username và password, nếu thông tin trùng với account mà ta có => set token vào local storage, redirect đến home page(done)
  - nếu login thành công => đổi text từ login qua logout (done)
  - nếu user đổi url trên trình duyệt sang /login => redirect về trang home(done)

  {key : userToken, value : "4G02zBeVAt2GMF5aV0P77PeDxoIGKpQhquQkohHcVfQPbVvPkisHs2qAkyq1lcq6"}

2. User List

- gọi api get ra list user(axios)
- hiển thị list user lên giao diện

3. xóa user

- click button delete => hiển thị popover để hỏi user có chắc chắn
  muốn xóa không

  - bấm ok => xóa
  - cancel => ko xóa

4. tạo mới user

- validate form (done)
- click create =>

  - khi tạo mới => phải generate ID cho user (done)
  - gọi api create new để lưu data vào db.json (done)
  - lưu data vào redux (done)
  - list tự động update lại (done)

5. edit user

- click button edit ở userlist => redirect qua page edit và đổ data của user được chọn
  của user cần được edit vào form - done
- chuyển text button từ create thành update
- gọi api update user
- sau khi thành công => chuyển về home
- reset form và chuyển text về lại create new

6. pagination

- total items : 30
- số items / page : 5

=> page = 30 / 5 = 6

- khi click vào số trong pagination => gọi api để lấy ra list user trong page đó

/users?\_page=1&\_limit=5
/users?\_page=2&\_limit=5
/users?\_page=3&\_limit=5
/users?\_page=4&\_limit=5

- scss
- js
- axios
- react bootstrap, bootstrap
- jsx
- style module scss
- axios
- redux, react redux, redux toolkit, redux dev tools
- create react app
- react bootstrap, bootstrap / antd design, tailwincss / MUI
- react router
- Formik, yup, pure process
- local storage
- json-server
- npm, yarn, nvm
- cách dùng các đơn vị phổ biến trong css
