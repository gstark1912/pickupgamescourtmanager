using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Infraestructure
{
    internal class CamelCaseExceptDictionaryKeysResolver : CamelCasePropertyNamesContractResolver
    {
        protected override JsonDictionaryContract CreateDictionaryContract(Type objectType)
        {
            JsonDictionaryContract contract = base.CreateDictionaryContract(objectType);

            contract.DictionaryKeyResolver = propertyName => propertyName.ToUpper() == propertyName ? propertyName : ToCamelCase(propertyName);

            return contract;
        }

        private string ToCamelCase(string propertyName)
        {
            var arr = propertyName.ToCharArray();
            arr[0] = arr[0].ToString().ToLower()[0];
            return String.Join("", arr);
        }
    }
}