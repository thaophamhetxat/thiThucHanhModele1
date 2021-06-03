function Number(a,b) {
    if (a==0){
        if (b==0){
            document.write('phương trình vô số nghiệm');
        }else{
            document.write('phương trinh vô nghiệm')
        }
    }else {
        document.write('phương trình có 1 nghiêm: ' + ((-b)/a));
    }
}
Number(5,0);