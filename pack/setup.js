/*
* @Author: Jingyuexing
* @Date:   2018-12-16 06:07:56
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2018-12-16 07:18:41
*/
export default class Install{
	Setup(version,Pth,Reademe,){
		const __version__ = version;
		const __Pth__ = Pth;
		const __reademe__ = Reademe;
		return ({
			version:__version__,
			path:__Pth__,
			reademe:__reademe__
		});
	}
	reStart(){

	}
	shawDown(){

	}

}