const products = [
    {
        "name": "Whimzees - Grain Free Dental Dog Chew - Hedgehog - L - 6PCS - 12.7OZ",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/whimzees-grain-free-dental-dog-chew-hedgehog-l-6pcs-12-7oz-dogs-105_480x480.jpg?v=1615795838",
        "des": "Now your dog will always want to brush their teeth. Made with all-natural ingredients, the vegetable-based texture will help remove plaque and tartar as they chew.",
        "ingredient": 
            `Potato starch, Glycerin, Powdered Cellulose, Lecithin, Yeast, Malt Extract, Sweet lupine meal, Annatto extract colour, Alfalfa extract.
            
            Crude Protein (min): 1.1%
            Crude Fat (min): 2.3%
            Crude Fat (max): 4.0%
            Crude Fiber (max): 13.7%
            Moisture (max): 12.0%`,
        "remark": "Not suitable for dogs under the age of 9 months. Not suitable for dogs under 5 pounds in weight.",
        "type": "dog-love-food",
        "price": 100,
        "inStock": 50,
    },
    {
        "name": "Applaws - Chicken Breast with Ham and Vegetables Canned Dog Food - 156G (min. 4 cans)",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/applaws-chicken-breast-with-ham-and-vegetables-canned-dog-food-156g-min-4-cans-dogs-332_480x480.jpg?v=1603270449",
        "des": 
            `Each 156g Tin can provide a rich source of health boosting ingredients such as Omega 3 and 6 as well as taurine and arginine.

            69% Chicken Breast and vegetables We insist on only the highest quality, human grade meat protein in our tins
            100% NaturalNothing added, Nothing hidden
            A Natural Source Of Taurine essential for proper function for the heart and eye health
            Made with limited ingredients Nothing added, nothing hidden`,
        "ingredient": 
            `Chicken Breast 28%, Chicken Broth 28%, Ham 15%, Pumpkin 8%, Carrot 8%, Green pea 8%, Rice 5%.
            Additives: None

            Natural Declaration
            100% Natural, Applaws is a complementary pet food for adult dogs, feed alongside a complete wet or dry dog food including Applaws complete dry dog food, for a balanced diet.
            
            Protein 13%, Crude Ash 2%, Crude Oils and Fats 0.3%, Crude Fibre 1%, Moisture 82%`,
        "type": "dog-food",
        "price": 20,
        "inStock": 100,
    },
    {
        "name": "Alfa Pet - Game Series Dog Treats - Venison Tendon - 80G",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/alfa-pet-game-series-dog-treats-venison-tendon-80g-dogs-978_480x480.jpg?v=1615790599",
        "des": `This is a 100% natural product, contains absolute NO additives and preservatives. Grain and gluten free with no added sugar or salt. Low temperature dehydrated product not oven baked, which will lock the most nutrition in.

        Alfa pet venison tendon will help remove plaque and tartar build up on your dog’s teeth by giving a dental-floss like action when chewed, as well as providing a good source of nutrition to your dog.`,
        "ingredient": `Venison tendon`,
        "type": "dog-food",
        "price": 95,
        "inStock": 500,
    },
    {
        "name": "Kong - Goodie Bone with Rope - XSmall",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/kong_rope_with_bone_480x480.jpg?v=1590728843",
        "des": `The KONG Goodie Bone™ with Rope toy engages dogs that delight in chew sessions, while the all-natural cotton rope making it an ideal toy to fulfill a dog’s instinctual needs. Made from the KONG Classic unique all-natural red rubber formula, this bone also has the added delight of an all-cotton rope that gives dogs multiple chewing choices.

        All in one durable KONG Rubber Bone and rope for dual textured chewing satisfaction
        All-Cotton rope cleans teeth while satisfying natural instincts
        Multiple chewing choices extend mind-occupying sessions
        Made in the USA. Globally Sourced Materials.`,
        "ingredient": `All in one durable KONG Rubber Bone and rope.`,
        "type": "dog-love-toy",
        "price": 68,
        "inStock": 0,
    },
    {
        "name": "Rogz - Asteroidz Fetch Ball for Dogs - Soft Chew Toy",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/rogz-asteroidz-fetch-ball-for-dogs-soft-chew-toy-913_480x480.jpg?v=1615450611",
        "des": `Soft enough not to hurt your dog’s teeth, but firm enough to bounce. The lightest, bounciest ball in the cosmic universe.

        In 5 Colors, 3 Sizes`,
        "ingredient": `KONG Classic unique all-natural rubber.`,
        "type": "dog-toy",
        "price": 50,
        "inStock": 1000,
    },
    {
        "name": "IRIS - Foldable Dog Toilet - Yellow (L)",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/iris-foldable-dog-toilet-yellow-l-dogs-570_480x480.jpg?v=1615454065",
        "des": `Foldable toilet for dogs.

        When it's folding L-shaped, it's a great toilet for male dogs. When it's flat, it becomes a large toilet which is suitable for all dogs especially large dogs.
        
        With antibacterial Ag+ materials.
        
        Size: 94 x 64 x 9.6cm
        
        Model: FT-940`,
        "ingredient": `KONG Classic unique all-natural rubber with antibacterial Ag+ materials.`,
        "type": "dog-love-dailySupply",
        "price": 300,
        "inStock": 50,
    },
    {
        "name": "IRIS - Foldable Dog Toilet - Lite Blue (S) 500*345*323mm",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/IRIS_IT-500_-_Foldable_Dog_Toilet_-_Lite_Blue_b_f134005a-f6a2-4f20-bd8d-18d1eec368cd_265x265.jpg?v=1590727652",
        "des": `Foldable toilet for dogs.

        When it's folding L-shaped, it's a great toilet for male dogs. When it's flat, it becomes a large toilet which is suitable for dogs.
        
        With antibacterial Ag+ materials.
        
        Size: 500*345*323mm
        
        Model: IT-500`,
        "ingredient": `KONG Classic unique all-natural rubber with antibacterial Ag+ materials.`,
        "type": "dog-dailySupply",
        "price": 200,
        "inStock": 15,
    },
    {
        "name": "Royal Canin - Feline Indoor 27 - 2KG",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/royal-canin-feline-indoor-27-2kg-cats-762_480x480.jpg?v=1603274381",
        "des": `Royal Canin Indoor Cat is a full-diet cat food for cats that live indoors only, with appropriate calorie content, minimising hair balls and reducing faeces odour.

        Odour Reduction: An exclusive process that guarantees small, firm and considerably less smelling faeces.
        
        Hairball Regulation: A combination of fibres that improves intestinal transit, favours the elimination of the hair that is swallowed every day and limits hairball formation.
        
        Youth Complex 500/200: A complex of synergistic antioxidants (green tea polyphenols and high concentrations of of vitamins E & C) that helps keep your cat young by combating the attack of free radicals responsible for cellular damage.
        
        Optimal Calorie Control: Provides an ideal balance between the food's energy supply and your cat's energy expenditure, in relation to its lifestyle and level of activity.
        
        Tartar Control: Improves oral hygiene by reducing the occurrence of tartar deposits on your cat's teeth.
        
        Hairball System: Stimulates the elimination of hairs from the intestines and reduces the risk of hairball formation.
        
        Royal Canin Feline INDOOR 27
        
        The indoor cat spends more of her time eating and sleeping than taking any form of exercise. She therefore has only moderate energy requirements.
        
        The lack of exercise leads to a slower intestinal transit. This phenomenon can cause intestinal disorders and result in soft smelly faeces left in the litter tray.
        
         Your pet spends 3 to 4 hours per day grooming, during she tends to swallow their hair. This can form hairballs in the stomach and intestines which are difficult to dislodge if there is no access to natural purgatives such as grass. A suitable food can help.
        
        For more than 40 years Royal Canin has been making your pet„¢s health the prime focus of their work leading to the product range Å“Health Nutrition amongst others. Only with the knowledge of your pet„¢s exact nutritional requirements and with respect for the individuality of every animal can the perfect meal be developed and produced to exactly meet your pet„¢s needs.`,
        "ingredient": `Corn, poultry protein (dried), rice, vegetable protein isolate, wheat, animal fat, animal protein (hydrolyzed), lignocellulose, minerals, beet pulp, soya oil, fructo-oligosaccharides, yeast, fish oil. 
        *L.I.P. : proteins selected for their very high assimilation
        
         
        
        Additives:
        Nutritional dietary additives:
        Vitamin A (14,700 IU/kg), vitamin D3 (800 IU/kg), E1 [iron] (50 mg/kg), E2 [iodine] (5 mg/kg), E4 [copper] (5 mg/kg), E5 [manganese] (65 mg/kg], E6 [zinc] (194 mg/kg), E8 [selenium] (0.11 mg/kg), preservatives, antioxidants.`,
        "remark": "Complete feed for adult indoor cats from 1 to 10 years of age.",
        "type": "cat-love-food",
        "price": 250,
        "inStock": 35,
    },
    {
        "name": "Weruva - Cats In The Kitchen - Mack, Jack and Sam - Salmon, Mackerel & Skipjack Tuna in Gravy - 85G (min. 12 Pouches)",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/weruva-cats-in-the-kitchen-mack-jack-and-sam-salmon-mackerel-skipjack-tuna-gravy-85g-min-4-pouches-673_480x480.jpg?v=1603283459",
        "des": `Weruva Cats In the Kitchen Pouches come in six delicious protein combinations that your cat will love! And you’ll have the comfort of knowing:

        Bone Free Meats
        Highly Palatable
        Free Range, Grain-Free & Gluten Free
        Wild Caught
        Cruelty & BPA Free
        Free of Added Hormones
        Dolphin Safe`,
        "ingredient": `Water sufficient for processing, Salmon, Mackerel, Tuna, Tapioca Starch, Sunflower Seed Oil, Tricalcium Phosphate, Xanthan gum, Choline chloride, Taurine, Vitamin E supplement, Zinc sulfate, Thiamine mononitrate, (Vitamin B1), Nicotinic acid (Vitamin B3), Calcium pantothenate, Manganese sulfate, Vitamin A supplement, Potassium iodide, Ferrous sulfate, Vitamin D3 supplement, Riboflavin supplement (Vitamin B2), Pyrodixine hydrochloride (Vitamin B6), Copper Sulfate, Folic Acid, Menadione sodium bisulfite complex (Source of vitamin K), Vitamin B12 supplement
        
        Crude Protein 9%, Crude Fat 1.4%, Crude Fiber 0.5%, Moisture 85%, Ash 2%, Phosphorous, Magnesium, Calcium, Taurine`,
        "type": "cat-food",
        "price": 15,
        "inStock": 2000,
    },
    {
        "name": "Smartcat-Peek a Prize Toy Box (Large - 14\" x 14\" x 3\")",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/smartcat-16_-peek-a-prize-toy-box-no3833_480x480.jpg?v=1590736678",
        "des": `Cats know that cracks and crevices are where all the fun critters to play with hide! Keep your fur baby entertained when you're not at home with the SmartCat Peek a Prize Toy Box. It's designed to partially conceal toys, piquing your cat's interest and making her paw each toy to get it out. The Peek a Prize Toy Box comes with two toys but can be used with any appropriately-sized toy or tasty treat!`,
        "ingredient": `KONG Classic unique all-natural rubber`,
        "remark": "Not intended for children and only for supervised use with kittens. Keep safety in mind. If a toy or accessory is one that you would not give to a child that is 3 years old or younger, please do not give it to your cat.",
        "type": "cat-toy",
        "price": 300,
        "inStock": 20,
    },
    {
        "name": "Imperial cat-Animal Scratchers - Large Dachshund (9\"D x 6\"H x 20\"W)",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/Imperial_Cat_-_Animal_Scratchers_-_Large_Dachshund_480x480.jpeg?v=1590727183",
        "des": `Dachshunds are known for their back problems, but on the Animal Scratch n Shapes - Dachshund, when the back starts to go, it's working just fine. Your cat will love to claw away at the rugged body of corrugated cardboard crafted from recycled materials. A packet of organic catnip is hidden in the middle, giving them a reason to take after this wiener dog instead of your favorite chair.`,
        "ingredient": `Material: Corrugated Cardboard`,
        "type": "cat-love-toy",
        "price": 400,
        "inStock": 30,
    },
    {
        "name": "Imperial cat-Cat 'n Around Toys - Catnip Mice",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/imperial-cat-n-around-toys-catnip-mice-cats-853_480x480.jpg?v=1615448937",
        "des": `Smart, engaging toys.
        Satisfies cats' instinctual desire to hunt.
        Kick boredom out the door.
        Largest selection of USA made toys!.`,
        "ingredient": `Durable, long-lasting materials.
        Catnip toys stuffed with Certified Organic Catnip.`,
        "type": "cat-toy",
        "price": 50,
        "inStock": 400,
    },
    {
        "name": "One for Pets - Cat Show House - Double - Red",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/One_for_Pets_-_Cat_Show_House_-_Double_-_Red_480x384.jpg?v=1618980061",
        "des": `This unique design provides you with the following features:

        Spacious interior space
        A flat top to hold photos and show essentials
        Double front doors
        Zippered door at each end
        Interior ceiling ring for hanging pet toys
        Built-in straps allow safe connection to a seatbelt
        Easy to set up and fold flat
        Extra pockets for treats, toys and travel essentials
        Carry bag with large pockets`,
        "type": "dailySupply",
        "price": 1200,
        "inStock": 5,
    },
    {
        "name": "Makar - Open Cat Litter Box with scoop",
        "pic": "https://cdn.shopify.com/s/files/1/0073/0031/7248/products/makar-open-cat-litter-box-with-scoop-cats-965_480x480.jpg?v=1615447692",
        "des": `Here's a stylish litter pan for medium to large cats. It features a removable upper shield to minimize litter scatter, polished interior surfaces, and heavy-duty construction throughout. 

        The litter box comes with a matching litter scoop.
        
        Open top design offers easy accessibility for cleaning.`,
        "remark": "Cat litter not included.",
        "type": "cat-love-dailySupply",
        "price": 200,
        "inStock": 35,
    }
];

module.exports = products;