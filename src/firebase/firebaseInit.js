import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBt_UrFmJXfVQudkM6ETZdsUjf_Hi6fobY',
	authDomain: 'vuestagram-8933f.firebaseapp.com',
	databaseURL: 'https://vuestagram-8933f-default-rtdb.firebaseio.com',
	projectId: 'vuestagram-8933f',
	storageBucket: 'vuestagram-8933f.appspot.com',
	messagingSenderId: '213119705533',
	appId: '1:213119705533:web:ffdbb802d90ebd5486b2d4',
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
