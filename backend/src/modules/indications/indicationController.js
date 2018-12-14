import db from '../database/model/';

export const newIndicationController = async (req, res) => {

    const newInd = db.Indication.build({
        NameInd: req.body.NameInd,
        Type: req.body.Type,
    })
        .save()
        .then(indication => {
            return res.json("sucessfuly added new indication");
        })
        .catch(error => {
            return res.json("problem occured during insert");
        })
};

export const deleteIndicationController = async (req, res) => {

    db.Indication.destroy({
        where: { IDIndication: req.params.id }
    })
        .then(deletedIndication => {
            res.json({
                response: deletedIndication == 1 ? `Indication with ID ${req.params.id} was deleted` : `Indication with ID ${req.params.id} was not deleted`
            })
        });
};

export const indicationController = async (req, res) => {
    const indications = await db.Indication.findAll({
        attributes: ['IDIndication', 'NameInd', 'Type'],
        raw: true,
    });
    return res.json({ indications });

};

export const updateIndicationController = async (req, res) => {

    db.Indication.update({
        NameInd: req.body.NameInd,
        Type: req.body.Type,
    }, {
            where: { IDIndication: req.params.id }
        })
        .then(result => { return res.json("Indication updated"); })
        .catch(err => { return res.json("An error occured while changing the indication"); })
};

