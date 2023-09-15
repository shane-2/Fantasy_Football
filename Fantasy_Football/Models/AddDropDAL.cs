using Newtonsoft.Json;
using System.Net;

namespace Fantasy_Football.Models
{
    public class AddDropDAL
    {
        public static HotCold GetAddDrop()
        {
            //Setup
            string apiKey = Secret.apiKey;
            string url = $"https://api.fantasynerds.com/v1/nfl/add-drops?apikey={apiKey}";


            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Convert it to JSON
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            //Convert to c#
           HotCold result = JsonConvert.DeserializeObject<HotCold>(JSON);
            return result;
        }
    }
}
