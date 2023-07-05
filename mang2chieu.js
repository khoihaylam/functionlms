// cau 1:viet fuction cau rikkei academy
function xinchaorikkei(){
    console.log("xin chao rikkei academy")
}
xinchaorikkei()
// cau 2:tinh binh phuong 1 so
function binhphuong(a){
    return a*a
}
let a=prompt("nhap a:")
a=parseInt(a)
console.log(binhphuong(a))
// bai 3
function timtheky(n){
    return (n+99)/100;

}

n=Number(prompt("nhap n:"))
console.log(timtheky(n))
function giatrilonnhat(arr){
    max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
let arr=[1,2,3,4,10,5,6,7]
console.log(giatrilonnhat(arr))
// bai 8:viet ham timh trung binh cong cua mang
function trungbinhcongcuamang(arr1){
    let sum=0
    for(let i=0;i<arr1.length;i++){
        sum=sum+arr1[i]
    }
    return sum
}
let arr1=[1,2,3,4,5,6,7,8,9,10]
console.log(trungbinhcongcuamang(arr1))
// bai 7
function sochanle(p){
    if(p%2==0){
        return true
    }
    return false
}
let p=Number(prompt("nhap p"))
if(sochanle(p)==true){
    console.log("la so chan")
}
else{
    console.log("la so le")
}
// kiem tra so nguyen to
function kiemtrasonguyento(l){
    if(l<2){
        return false
    }
    for(let i=2;i<l;i++){
        if(l%i==0){
            return false
        }
    }
    return true
}
l=Number(prompt("nhap l"))
if(kiemtrasonguyento(l)==true){
    console.log("la so nguyen to")
}
else{
    console.log("k phai la so nguyen to")
}
// kiem tra so hoan hao
function sohoanhao(r){
    let tinhsum=0
    for(let i=0;i<r;i++){
        if(r%i==0){
            tinhsum=tinhsum+i
        }

    }
    return tinhsum
}
r=Number(prompt("nhap r:"))
if (sohoanhao(r)==r) {
    console.log("la so hoan hao")
    
}
else{
    console.log("k phai la so hoan hao")
}
// in ra mang so nguyen to tang dan
// b1:ham kiem tra so nguyen to
function kiemtrasonguyento(z){
    if(z<2){
        return false
    }
    for(let i=2;i<z;i++){
        if(z%i==0){
            return false
        }
    }
    return true
}
let z=Number(prompt("nhap z:"))
let arr4=[]
for(let i=0;i<z;i++){
    let n=Number(prompt("nhap n"))
    arr4.push(n)
}
for(let i=0;i<z-1;i++){
        for(let j=i+1;j<z;j++){
                if(arr4[j]<arr4[i]){
                    let temp=arr4[j]
                    arr4[j]=arr4[i]
                    arr4[i]=temp
                }

            }

        }
for(let i=0;i<z;i++){
    if(kiemtrasonguyento(arr4[i])){
        console.log(arr4[i])
    }
}


  
         

