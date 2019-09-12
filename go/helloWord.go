// 应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言
package main
// 表示一个可独立执行的程序
import "fmt"
// 告诉go编译器需要使用fmt包-实现格式化io
func main () { // {不能单独放在一行
	var age, class int = 1, 2;
	age = 10;
	// 将字符串输出到控制台，并自动添加换行符
	fmt.Println("hello word",age,class)
} 