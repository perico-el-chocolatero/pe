let dis = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
let giroder = Math.randomBoolean()
let volo = 30
basic.forever(function () {
    dis = DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12)
    if (dis != 0 && dis == 0) {
    	
    }
})
