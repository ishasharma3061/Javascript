// {{{{{{{{{{ARRAY OF OBJECT}}}}}}}}}}
// TASK: ID TO FIND EMPLOYEE WITH SALARY GREATER THAN 50,0000;
//formula used: (salary=base+hra+da)-(pf+tds)
// const salary=[
//     {name:"john",
//         payable:{base:32500,hra:1200,da:20050},
//         deduction:{pf:1000,tds:1200}
//     },
//     {name:"annie",
//         payable:{base:32500,hra:1200,da:20050},
//         deduction:{pf:1000,tds:1200}
//     }
// ];
// function solve(salary){
//  let result=[];  //empty array
//  for(let i=0;i<salary.length;i++){
//     let emp=salary[i];
//     let payable =emp.payable.base+emp.payable.hra+emp.payable.da;
//     let deduction=emp.deduction.pf+emp.deduction.tds;
//     let total=payable-deduction;
//     if(total>50000){
//         result.push(`${emp.name} has a final salary of ${total}`);
//     }

//  }

//  if(result.length==0)
//     console.log("no employee has salary above 50,000");
 
//  return result;
// }
// console.log(solve(salary));
// ---------------------------------------------------
// task2:highest base salary
 const salary = [
    {
        name: "john",
        payable: { base: 32500, hra: 1200, da: 20050 },
        deduction: { pf: 1000, tds: 1200 }
    },
    {
        name: "annie",
        payable: { base: 33500, hra: 1200, da: 20050 },
        deduction: { pf: 1000, tds: 1200 }
    }
];

function solve(salary) {
    let maxEmp = salary[0]; // assume first employee has highest base

    for (let i = 1; i < salary.length; i++) {
        if (salary[i].payable.base > maxEmp.payable.base) {
            maxEmp = salary[i]; // update maximum
        }
    }

    console.log(
        `Employee with the highest base salary is ${maxEmp.name} with ${maxEmp.payable.base}`
    );
}

solve(salary);
