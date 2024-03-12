'use strict';

let quantityPerHour = 50;
let plan_shift = [
 {
     id: 1,
     order_id: 123456,
     article: 'Toyota',
     qnt: 146
},
{
     id: 2,
     order_id: 654321,
     article: 'VAZ',
     qnt: 57
},
{
    id: 3,
    order_id: 525252,
    article: 'kamaz',
    qnt: 33
}
]
 // function getHours(dataArray){
//     let totalQuantity = 0;
//     for(let i = 0; i<dataArray.length; i++){
//         totalQuantity += dataArray[i].qnt;
//     }
//     console.log('Total hours ' + (totalQuantity / quantityPerHour));
//     return totalQuantity / quantityPerHour;
// }
function getOrdersQueue(dataArray){
        let ordersQueue = [];
        let hour = 0;
        let freeTime = 0;
        for(let i = 0; i< dataArray.length; i++){
            let totalQuantity = dataArray[i].qnt;
            while(totalQuantity > 0){
                if(freeTime != 0){
                    if(freeTime > totalQuantity){
                        freeTime -= totalQuantity;
                        ordersQueue.push(
                        {
                                    hour: hour,
                                    order_id: dataArray[i].order_id,
                                    article: dataArray[i].article,
                                    quantity: totalQuantity,
                        });
                        totalQuantity = 0;
                        break;
                    } 
                    else {
                        totalQuantity -= freeTime;
                        ordersQueue.push(
                            {
                                        hour: hour,
                                        order_id: dataArray[i].order_id,
                                        article: dataArray[i].article,
                                        quantity: freeTime,
                            }); 
                            freeTime = 0;
                    }
                }
                if(totalQuantity < quantityPerHour){
                    freeTime = quantityPerHour - totalQuantity;
                    ++hour;
                    ordersQueue.push(
                        {
                                    hour: hour,
                                    order_id: dataArray[i].order_id,
                                    article: dataArray[i].article,
                                    quantity: totalQuantity,
                        });
                        totalQuantity = 0;
                }
                else{
                    totalQuantity -= quantityPerHour;  
                    ++hour;
                    ordersQueue.push(
                        {
                                    hour: hour,
                                    order_id: dataArray[i].order_id,
                                    article: dataArray[i].article,
                                    quantity: quantityPerHour,
                        });
                }
            }
    }
    console.log(ordersQueue);
}
getOrdersQueue(plan_shift);
