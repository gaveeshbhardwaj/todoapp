var statusENUMS = {
    ACTIVE:"ACTIVE",
    DELETED:"DELETED",
    COMPLETED:"COMPLETED"
};

var todoObject = [
    {"title":"Learn Javascript","status":statusENUMS.ACTIVE},
    {"title":"Learn Node","status":statusENUMS.ACTIVE},
    {"title":"Learn Angular","status":statusENUMS.ACTIVE},
    {"title":"Learn C#","status":statusENUMS.ACTIVE}
];

module.exports.todoObj = todoObject;
module.exports.statusENUMS = statusENUMS;