module tb_full_add; 
    output reg sum;
    output reg cout;
    input reg a;
    input reg b;
    
    full_add a1(.a(a),.b(b),.cin(cin),.sum(sum),.cout(cout));
    
    initial begin 
    a <= 0; 
    b <=0; 
    #5;
    a <= 1; 
    b <=1; 
     #5;
    

    end
    
    endmodule