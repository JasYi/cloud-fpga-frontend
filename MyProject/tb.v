module tb_counter; 
    reg clk; 
    reg rstn; 
    wire [3:0] out;
    
    counter c0(.clk(clk), .rstn(rstn), .out(out));
    
    always #5 clk = ~clk; 
    
    initial begin 
    clk <= 0; 
    rstn <=0; 
    #20 rstn <=1;

    

    end
    
    endmodule