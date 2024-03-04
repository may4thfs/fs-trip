/**
 * 获取图片资源的URL（这个函数可以用于在 JavaScript 模块中获取静态资源（如图像）的 URL，这在构建 web 应用时非常有用。例如，在 Vue.js 项目中，你可能需要获取图像的 URL，以便在模板中使用它）
 * @param {*} image 图片名称
 * @returns 图片资源的URL
 */
export const getAssetURL = (image) => {
	// 参数一: 相对路径
	// 参数二: 当前路径的URL
	return new URL(`../assets/img/${image}`, import.meta.url).href
}
