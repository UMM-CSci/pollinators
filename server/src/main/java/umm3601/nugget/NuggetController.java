package umm3601.nugget;

import com.google.gson.Gson;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;
import org.bson.Document;
import java.util.Map;

public class NuggetController {
    private final Gson gson;
    private MongoDatabase database;
    private final MongoCollection<Document> nuggetCollection;

    /**
     * Construct a controller for users.
     *
     * @param database the database containing user data
     */
    public NuggetController(MongoDatabase database) {
        gson = new Gson();
        this.database = database;
        nuggetCollection = database.getCollection("nuggets");
    }

    /**
     * Helper method that gets a single random nugget
     *
     * @return A random info nugget from the collection
     */
    // don't know how to make this work, will do it in the client instead
//    public String getRandomNugget() {
//        FindIterable<Document> jsonNugget
//            = nuggetCollection.find();
//
//        Iterator<Document> iterator = jsonNugget.iterator();
//        if (iterator.hasNext()) {
//            Document user = iterator.next();
//            return user.toJson();
//        } else {
//            // We didn't find the desired user
//            return null;
//        }
//    }


    /** Helper method which iterates through the collection, receiving all
     * documents if no query parameter is specified. If the category query parameter
     * is specified, then the collection is filtered so only documents of that
     * specified category are found.
     *
     * @param queryParams
     * @return an array of Nuggets in a JSON formatted string
     */
    public String getNuggets(Map<String, String[]> queryParams) {

        Document filterDoc = new Document();

        if (queryParams.containsKey("category")) {
            String category = queryParams.get("category")[0];
            filterDoc = filterDoc.append("category", category);
        }

        //FindIterable comes from mongo, Document comes from Gson
        FindIterable<Document> matchingNuggets = nuggetCollection.find(filterDoc);

        return JSON.serialize(matchingNuggets);
    }
}
