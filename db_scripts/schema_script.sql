CREATE table "user"(
	first_name varchar(100) ,
	last_name varchar(100),
	email varchar(100) not null ,
	mobile varchar(20) not null,
	user_name varchar(100) default null,
	passord varchar(1024) default null ,
	otp varchar(20) default null,
	profile_pic varchar(2048),
	"role" varchar(20) default 'user'
)

INSERT INTO users (user_name, mobile, email, role, password)
        VALUES ('vaishnavi', '9999999999', 'vaishnavi@gmail.com', 'student', 'vaishnavi123')