const TodayTimeFormal = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth =
        now.getMonth() + 1 > 9 ? now.getMonth + 1 : '0' + (now.getMonth() + 1);
    let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
    let minutes =
        now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();

    return (
        todayYear +
        '.' +
        todayMonth +
        '.' +
        todayDate +
        ' ' +
        dayOfWeek +
        ' ' +
        hours +
        ':' +
        minutes
    );
};
export default TodayTimeFormal;
