package umm3601.nugget;

import com.mongodb.BasicDBObject;
import com.mongodb.util.JSON;
import spark.Request;
import spark.Response;
import umm3601.user.UserController;

public class NuggetRequestHandler {
    private final NuggetController nuggetController;
    public NuggetRequestHandler(NuggetController nuggetController){
        this.nuggetController = nuggetController;
    }

    /**Method called from Server when the 'api/nuggets' endpoint is received.
     * This handles the request received and the response
     * that will be sent back.
     *@param req the HTTP request
     * @param res the HTTP response
     * @return an array of nuggets in JSON formatted String
     */
    public String getNuggets(Request req, Response res)
    {
        res.type("application/json");
        return nuggetController.getNuggets(req.queryMap().toMap());
    }
}
