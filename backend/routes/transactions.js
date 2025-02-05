const { addIncome, getIncomes, deleteIncome } = require('../controllers/Income')
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')


const router = require('express').Router()


router.post('/add-income', addIncome)
       .get('/get_incomes', getIncomes)
       .delete('/delete-income/:id', deleteIncome)
       .post('/add-expense', addExpense)
       .get('/get-expenses', getExpense)
       .delete('/delete-expense', deleteExpense )
module.exports = router