﻿using Newtonsoft.Json;
using System.Net;

namespace Fantasy_Football.Models
{
    public class PlayerDAL
    {

        public static PlayerModel GetPlayers()
        {
            //Setup
            string apiKey = Secret.apiKey;
            string url = $"https://api.fantasynerds.com/v1/nfl/draft-rankings?apikey={apiKey}&format=half";


            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Convert it to JSON
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            //Convert to c#
            PlayerModel result = JsonConvert.DeserializeObject<PlayerModel>(JSON);
            return result;
        }

    }
}
