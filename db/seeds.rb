# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({ email: "kilativ@hte.eth", password: "sendit" })

# bitcoin = Currency.create({
# 	symbol: 'BTC',
# 	name: 'Bitcoin',
# })

# ethereum = Currency.create({
# 	symbol: 'ETH',
# 	name: 'Ethereum',
# })

TrackedCoin.create({name: 'ethereum', user_id: 16})

TrackedCoin.create({name: 'bitcoin', user_id: 16})

TrackedCoin.create({name: 'eos', user_id: 16})

TrackedCoin.create({name: 'uniswap', user_id: 16})

Holding.create({name: 'ethereum', quantity: 32, user_id: 1})

Holding.create({name: 'uniswap', quantity: 32, user_id: 1})

Holding.create({name: 'bitcoin', quantity: 1, user_id: 1})

Holding.create({name: 'ethereum', quantity: 32, user_id: 4})

Holding.create({name: 'uniswap', quantity: 32, user_id: 4})

Holding.create({name: 'bitcoin', quantity: 1, user_id: 4})

Holding.create({name: 'ethereum', quantity: 32, user_id: 3})

Holding.create({name: 'uniswap', quantity: 32, user_id: 3})

Holding.create({name: 'bitcoin', quantity: 1, user_id: 3})