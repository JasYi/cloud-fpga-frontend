module half_adder_structural (
  input a,    // Input 'a'
  input b,    // Input 'b'
  output s,   // Output 's' (Sum)
  output c    // Output 'c' (Carry)
);
xor gate_xor (s, a, b);  // XOR gate for sum
 and gate_and (c, a, b);  // AND gate for carry
endmodule
// test