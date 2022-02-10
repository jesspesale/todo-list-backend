
exports.getPosts = (req, res) => {
    res.json({
        list_item: [
            {description: "Do Laudnry"}, 
            {description: "Walk the dog"}
        ]
    })
}