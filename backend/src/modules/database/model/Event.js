module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        IDEvent: { type: DataTypes.INTEGER, primaryKey: true },
        Name: DataTypes.STRING,
        Description: DataTypes.TEXT,
        Date: DataTypes.DATE,
        Time: DataTypes.TIME,
        Street: DataTypes.STRING,
        StreetNum: DataTypes.STRING,
        City: DataTypes.STRING,
        PostalCode: DataTypes.INTEGER
    }, {
            freezeTableName: true,
            timestamps: false
        });
  return Event;
};