const TodayFormal = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth =
        now.getMonth() + 1 > 9 ? now.getMonth + 1 : '0' + (now.getMonth() + 1);
    let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();

    return todayYear + '.' + todayMonth + '.' + todayDate;
};
export default TodayFormal;
