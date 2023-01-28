/* --------------------------------------------------
    All javascript and jquery plugins acativation
----------------------------------------------------- */

LUNES = 0;
MARTES = 1;
MIERCOLES = 2;
JUEVES = 3;
VIERNES = 4;
SABADO = 5;

DE0800A0930 = 0;
DE1000A1130 = 1;
DE1300A1430 = 2;
DE1500A1630 = 3;
DE1700A1830 = 4;
DE1900A2100 = 5;

var schedule = {};
schedule.day = [];
schedule.day[LUNES] = {}
schedule.day[LUNES].hour = [];
schedule.day[MARTES] = {}
schedule.day[MARTES].hour = [];
schedule.day[MIERCOLES] = {}
schedule.day[MIERCOLES].hour = [];
schedule.day[JUEVES] = {}
schedule.day[JUEVES].hour = [];
schedule.day[VIERNES] = {}
schedule.day[VIERNES].hour = [];
schedule.day[SABADO] = {}
schedule.day[SABADO].hour = [];

schedule.day[LUNES].hour[0] = 0;
schedule.day[LUNES].hour[1] = 0;
schedule.day[LUNES].hour[1] = -1;
schedule.day[LUNES].hour[2] = -1;
schedule.day[LUNES].hour[3] = -1;
schedule.day[LUNES].hour[4] = -1;
schedule.day[LUNES].hour[5] = 0;
schedule.day[MARTES].hour[0] = -1;
schedule.day[MARTES].hour[1] = -1;
schedule.day[MARTES].hour[2] = -1;
schedule.day[MARTES].hour[3] = -1;
schedule.day[MARTES].hour[4] = -1;
schedule.day[MARTES].hour[5] = 0;
schedule.day[MIERCOLES].hour[0] = 0;
schedule.day[MIERCOLES].hour[1] = 0;
schedule.day[MIERCOLES].hour[2] = -1;
schedule.day[MIERCOLES].hour[3] = -1;
schedule.day[MIERCOLES].hour[4] = -1;
schedule.day[MIERCOLES].hour[5] = -1;
schedule.day[JUEVES].hour[0] = 0;
schedule.day[JUEVES].hour[1] = 0;
schedule.day[JUEVES].hour[2] = -1;
schedule.day[JUEVES].hour[3] = -1;
schedule.day[JUEVES].hour[4] = -1;
schedule.day[JUEVES].hour[5] = 0;
schedule.day[VIERNES].hour[0] = 0;
schedule.day[VIERNES].hour[1] = 0;
schedule.day[VIERNES].hour[2] = 0;
schedule.day[VIERNES].hour[3] = 0;
schedule.day[VIERNES].hour[4] = 0;
schedule.day[VIERNES].hour[5] = 0;
schedule.day[SABADO].hour[0] = 0;
schedule.day[SABADO].hour[1] = 0;
schedule.day[SABADO].hour[2] = 0;
schedule.day[SABADO].hour[3] = 0;
schedule.day[SABADO].hour[4] = 0;
schedule.day[SABADO].hour[5] = 0;

var skills = {};
var workshops = {};

var payplan = {};
payplan.fulllevel = {};
payplan.fulllevel.title = "Plan<br>Full Level";

payplan.mensual = {};
payplan.mensual.title = "Plan<br>Mensual";

payplan.clase = {};
payplan.clase.title = "Plan<br>Clase a Clase";

var paymethod = {}
paymethod.efectivo = {}
paymethod.efectivo.title = "Efectivo";
paymethod.efectivo.description = "Pagas el primer día de clases y comenzas a disfrutar";
paymethod.efectivo.conditions = `* La vacante se reservará hasta el próximo Miercoles a las 13:00hs.
<br>* Si no se presenta a la primera clase la reserva del horario se cancelará y
    tendrá que volver a realizar los pasos de inscripción.`;

paymethod.mercadopago = {}
paymethod.mercadopago.title = "Mercado Pago";
paymethod.mercadopago.description = "Pagá con cualquiera de las facilidades que ofrece Mercado Pago y acreditalo al instante";
paymethod.mercadopago.conditions = "* La acreditación se raliza al instante, así que solo te quedá venir a clases ;)";

paymethod.transferencia = {}
paymethod.transferencia.title = "Transferencia bancaria o depósito";
paymethod.transferencia.description = `Wilo Bank
<br>
<b>CBU</b>
384-20100-2-0000000107593-3
<br>
<b>TITULAR</b>
Alderete Mauro José Enrique
<br>
<b>CUIL</b>
20-33840771-9`;
paymethod.transferencia.conditions = `* Recorda enviarnos a nuestro correo una copia, captura o fotografía del
comprobante de transferencia o depósito para que podamos identificar tu abono.
<br>* Tené en cuenta que la vacante se reservará durante 5 días hábiles.
<br>* Si no realiza el pago durante ese periodo la reserva del horario se
    cancelará y tendrás que volver a realizar los pasos de inscripción.`;