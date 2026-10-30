import fs from 'fs';
import { DATA_SCIENCE_LAB_PROGRAMS } from '../src/data/dataSciencePrograms';
import { ProgramData, StepExplanation } from '../src/types';

// ============================================================================
// MAJOR 14: Granular Line-by-Line Steps & Enriched Objectives for Programs 1-10
// ============================================================================

const major14Enrichments: Record<number, {
  objectiveEnrichment: {
    problemSolved: string;
    overallMechanism: string;
    prerequisitesToUnderstand: string;
  };
  granularSteps: StepExplanation[];
}> = {
  // --------------------------------------------------------------------------
  // PROGRAM 1: NumPy Array Creation
  // --------------------------------------------------------------------------
  1: {
    objectiveEnrichment: {
      problemSolved: 'Standard Python lists are inefficient for scientific computing because they store pointers to scattered objects. NumPy introduces homogeneous contiguous memory n-dimensional arrays (ndarrays) for ultra-fast vectorized arithmetic.',
      overallMechanism: 'Demonstrates four distinct array instantiations: converting existing Python lists via np.array(), creating evenly-spaced step ranges via np.arange(), generating fractional interval steps via np.linspace(), and generating pseudo-random floats and ints with np.random.',
      prerequisitesToUnderstand: 'Python import statement, lists, floating-point numbers, and 2D matrix coordinate dimensions (rows x columns).'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Import NumPy with Standard Alias (import numpy as np)',
        codeSnippet: `import numpy as np`,
        whatItDoes: 'Loads the NumPy C-extension library into the Python runtime and assigns it the universal alias "np".',
        whyUsed: 'Provides access to high-performance C-implemented ndarray operations and mathematical functions.',
        howItWorks: 'Locates numpy package in site-packages and binds module namespace to variable identifier "np".',
        connectionToSurrounding: 'Required before calling any np.array, np.arange, or np.random functions.',
        examRelevance: 'The alias "np" is a PEP 8 community standard across data science worldwide.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 3-5',
        title: 'Create ndarray from Python List (np.array)',
        codeSnippet: `python_list = [1, 2, 3, 4, 5]
array_from_list = np.array(python_list)
print("Array from Python list:\n", array_from_list)`,
        whatItDoes: 'Converts a standard Python list of 5 integers into a contiguous C-memory 1D NumPy array [1 2 3 4 5].',
        whyUsed: 'Bridges existing Python data structures into NumPy\'s high-speed computing environment.',
        howItWorks: 'Allocates a contiguous memory buffer of int64 values and infers dtype automatically.',
        connectionToSurrounding: 'First array creation technique demonstrated.',
        examRelevance: 'Notice NumPy prints arrays without commas ([1 2 3 4 5]), unlike Python lists ([1, 2, 3, 4, 5]).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 7-8',
        title: 'Generate Stepped Range Array (np.arange)',
        codeSnippet: `array_from_arange = np.arange(0, 10, 2)
print("\nArray using np.arange:\n", array_from_arange)`,
        whatItDoes: 'Generates array [0 2 4 6 8] starting at 0, stopping strictly before 10, stepping by 2.',
        whyUsed: 'Creates sequential integer ranges without allocating a temporary Python range object.',
        howItWorks: 'Takes (start, stop, step) where stop is non-inclusive [start, stop).',
        connectionToSurrounding: 'Demonstrates step-based interval generation.',
        examRelevance: 'np.arange stop value is EXCLUSIVE; 10 is never included in the array.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 10-11',
        title: 'Generate Linearly Spaced Points (np.linspace)',
        codeSnippet: `array_from_linspace = np.linspace(0, 1, 5)
print("\nArray using np.linspace:\n", array_from_linspace)`,
        whatItDoes: 'Generates 5 evenly spaced fractional numbers between 0 and 1: [0. 0.25 0.5 0.75 1.].',
        whyUsed: 'Essential for plotting smooth math curves where you need an exact number of samples.',
        howItWorks: 'Takes (start, stop, num_points); calculates delta = (stop - start) / (num_points - 1). Both endpoints INCLUDED.',
        connectionToSurrounding: 'Contrasts with np.arange: np.arange takes step size; np.linspace takes total number of points.',
        examRelevance: 'Top viva question: Difference between np.arange and np.linspace? arange specifies step size (stop exclusive); linspace specifies number of samples (stop inclusive).'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 13-14',
        title: 'Generate 3x3 Matrix of Uniform Random Floats (np.random.rand)',
        codeSnippet: `random_array = np.random.rand(3, 3)
print("\nRandom array (3x3) using np.random.rand:\n", random_array)`,
        whatItDoes: 'Generates a 3x3 2D matrix populated with continuous pseudo-random floats in interval [0.0, 1.0).',
        whyUsed: 'Used for initializing neural network weights and Monte Carlo statistical simulations.',
        howItWorks: 'Samples uniform distribution U[0, 1) across a (3, 3) shape dimension.',
        connectionToSurrounding: 'Transitions from deterministic to probabilistic array generation.',
        examRelevance: 'np.random.rand takes dimensions as separate arguments (3, 3), not as a tuple.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 16-17',
        title: 'Generate 2x4 Matrix of Random Integers (np.random.randint)',
        codeSnippet: `random_int_array = np.random.randint(1, 11, size=(2, 4))
print("\nRandom integer array (2x4) using np.random.randint:\n", random_int_array)`,
        whatItDoes: 'Generates a 2-row by 4-column matrix filled with random discrete integers from 1 up to 10.',
        whyUsed: 'Simulates discrete events like rolling dice, customer IDs, or synthetic discrete test data.',
        howItWorks: 'Takes (low, high, size); low is inclusive, high is exclusive [1, 11). size specifies 2D tuple (2, 4).',
        connectionToSurrounding: 'Completes all 5 array creation paradigms.',
        examRelevance: 'High boundary in randint is EXCLUSIVE; randint(1, 11) produces numbers 1 through 10.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 2: NumPy Array Manipulation
  // --------------------------------------------------------------------------
  2: {
    objectiveEnrichment: {
      problemSolved: 'Data preparation requires slicing subsets, changing dimensional shape, and merging or partitioning matrices without copying unnecessary memory.',
      overallMechanism: 'Demonstrates zero-based positive and negative indexing, multi-element slicing [start:stop], dimension reshaping via .reshape(rows, cols), tensor concatenation via np.concatenate(), and partitioning via np.array_split().',
      prerequisitesToUnderstand: 'NumPy 1D and 2D array shapes, zero-based indexing, negative indexing, and dimensional compatibility.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'Import NumPy and Initialize 1D Array',
        codeSnippet: `import numpy as np
arr = np.array([10, 20, 30, 40, 50, 60])
print("Array element", arr)`,
        whatItDoes: 'Loads NumPy and creates a 6-element integer array [10 20 30 40 50 60].',
        whyUsed: 'Baseline array used for all subsequent indexing and slicing experiments.',
        howItWorks: 'Allocates continuous memory buffer of size 6.',
        connectionToSurrounding: 'Supplies target array for steps 2 through 6.',
        examRelevance: 'Shape of this 1D array is (6,).'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 5-6',
        title: 'Positive Zero-Based Indexing (arr[2] & arr[5])',
        codeSnippet: `print("\nIndexing: 3rd element ", arr[2]) # 30
print("Indexing: last element", arr[5])`,
        whatItDoes: 'Accesses third element at index 2 (value 30) and sixth element at index 5 (value 60).',
        whyUsed: 'Retrieves specific scalar elements in O(1) constant time.',
        howItWorks: 'Direct pointer offset: base_address + (index * item_size).',
        connectionToSurrounding: 'Shows standard forward zero-based element access.',
        examRelevance: 'Index 0 is 1st element; index (n-1) is the nth element.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 8-9',
        title: 'Forward Slicing and Negative Slicing',
        codeSnippet: `print("\nSlicing:", arr[1:4]) # [20 30 40]
print("Slicing with negitive index", arr[-3:-1])`,
        whatItDoes: 'arr[1:4] extracts indices 1, 2, 3 ([20 30 40]); arr[-3:-1] extracts elements from 3rd from end to 1st from end ([40 50]).',
        whyUsed: 'Extracts sub-ranges without mutating the original array.',
        howItWorks: 'Slicing creates a memory view sharing data with the parent array.',
        connectionToSurrounding: 'Shows both positive and reverse offset extraction.',
        examRelevance: 'Viva point: NumPy slices are views, not copies; modifying a slice modifies the original array!'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 11-12',
        title: 'Reshape 1D Array into 2x3 Matrix (arr.reshape(2, 3))',
        codeSnippet: `reshaped = arr.reshape(2, 3)
print("\nReshaped (2x3):\n", reshaped)`,
        whatItDoes: 'Reorganizes 6 elements into a 2D matrix with 2 rows and 3 columns.',
        whyUsed: 'Prepares data for matrix algorithms, machine learning weights, and image processing.',
        howItWorks: 'Modifies shape tuple from (6,) to (2, 3) and strides without altering data in memory.',
        connectionToSurrounding: 'Total element count must remain strictly identical: 2 * 3 = 6.',
        examRelevance: 'Critical exam rule: Total elements must match. arr.reshape(2, 4) throws ValueError because 2*4=8 != 6.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 14-17',
        title: 'Concatenate Two Arrays (np.concatenate)',
        codeSnippet: `a = np.array([1, 2])
b = np.array([3, 4])
joined = np.concatenate((a, b))
print("\nJoined:", joined)`,
        whatItDoes: 'Joins array [1 2] and array [3 4] into a single 4-element array [1 2 3 4].',
        whyUsed: 'Merges batches or feature vectors horizontally or vertically.',
        howItWorks: 'Allocates new contiguous buffer and copies elements from tuple of arrays.',
        connectionToSurrounding: 'Demonstrates joining operation.',
        examRelevance: 'The arrays to concatenate must be passed inside a tuple: np.concatenate((a, b)).'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 19-22',
        title: 'Split Array into Sub-arrays (np.array_split)',
        codeSnippet: `split = np.array_split(arr, 3)
print("\nSplitting:")
for part in split:
  print(part)`,
        whatItDoes: 'Splits 6-element array into 3 equal 2-element sub-arrays: [10 20], [30 40], and [50 60].',
        whyUsed: 'Divides datasets into train, validation, and test partitions or chunks.',
        howItWorks: 'Returns a Python list containing 3 sliced ndarray views.',
        connectionToSurrounding: 'Final manipulation operation.',
        examRelevance: 'np.array_split handles uneven divisions gracefully (unlike np.split which throws an error).'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 3: Universal Functions (ufuncs) and Mathematical Methods
  // --------------------------------------------------------------------------
  3: {
    objectiveEnrichment: {
      problemSolved: 'In pure Python, computing element-wise operations on lists requires slow interpreted for-loops. NumPy Universal Functions (ufuncs) execute compiled C SIMD vector loops over entire arrays simultaneously.',
      overallMechanism: 'Applies element-wise binary ufuncs (np.add, np.subtract, np.multiply), unary ufuncs (np.sqrt, np.power), and statistical reductions (.sum(), .mean(), .max(), .std()) across corresponding array indices.',
      prerequisitesToUnderstand: 'Vectorized computing concept, broadcasting rules, and basic statistics (mean, standard deviation).'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'Import NumPy and Initialize Pair of Operands',
        codeSnippet: `import numpy as np
arr1 = np.array([6, 3, 9, 16, 20])
arr2 = np.array([1, 2, 7, 3, 15])`,
        whatItDoes: 'Loads NumPy and creates two 5-element arrays arr1 and arr2.',
        whyUsed: 'Provides operand pairs for element-by-element vectorized math.',
        howItWorks: 'Allocates two parallel C-contiguous arrays in memory.',
        connectionToSurrounding: 'Inputs for all binary ufuncs in steps 2 and 3.',
        examRelevance: 'Both arrays must have compatible shapes for element-wise operations.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 6-7',
        title: 'Display Input Array Contents',
        codeSnippet: `print("Elements of Array 1:", arr1)
print("Elements of Array 2:", arr2)`,
        whatItDoes: 'Prints contents of both input vectors.',
        whyUsed: 'Allows visual verification of operand values.',
        howItWorks: 'Outputs string representations to stdout.',
        connectionToSurrounding: 'Establishes baseline before math operations.',
        examRelevance: 'Good lab report formatting.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 9-11',
        title: 'Element-wise Binary ufuncs: np.add, np.subtract, np.multiply',
        codeSnippet: `print("Sum of arr1 and arr2:", np.add(arr1, arr2))
print("Difference of arr1 and arr2:", np.subtract(arr1, arr2))
print("Product of arr1 and arr2:", np.multiply(arr1, arr2))`,
        whatItDoes: 'Computes parallel addition [7 5 16 19 35], subtraction [5 1 2 13 5], and multiplication [6 6 63 48 300].',
        whyUsed: 'Replaces manual for-loops with hardware-accelerated vectorized C loops.',
        howItWorks: 'Loops over internal C memory buffers pairing arr1[i] and arr2[i].',
        connectionToSurrounding: 'Equivalent to operators (arr1 + arr2), (arr1 - arr2), and (arr1 * arr2).',
        examRelevance: 'In NumPy, * is element-wise multiplication, NOT matrix dot product!'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 12',
        title: 'Unary Mathematical ufunc: np.sqrt(arr1)',
        codeSnippet: `print("Square roots:", np.sqrt(arr1))`,
        whatItDoes: 'Calculates the square root of every element in arr1 [2.449, 1.732, 3.0, 4.0, 4.472].',
        whyUsed: 'Applies transcendental math to every vector element simultaneously.',
        howItWorks: 'Calls C libm sqrt() function across array buffer.',
        connectionToSurrounding: 'Demonstrates unary functions alongside binary functions.',
        examRelevance: 'Returns floating point numbers even when input array has integers.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 14-16',
        title: 'Statistical Reductions: sum(), mean(), max()',
        codeSnippet: `print("\nSum:", arr1.sum())
print("Mean:", arr1.mean())
print("Max:", arr1.max())`,
        whatItDoes: 'Calculates aggregate sum (54), arithmetic mean (10.8), and maximum value (20) of arr1.',
        whyUsed: 'Computes summary descriptive statistics by collapsing array dimensions.',
        howItWorks: 'Traverses array accumulating sum, dividing by length, and tracking peak value.',
        connectionToSurrounding: 'Precedes power and standard deviation calculations.',
        examRelevance: 'Reductions collapse an array into a single scalar value.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 17-18',
        title: 'np.power(arr1, 2) and Standard Deviation (arr1.std())',
        codeSnippet: `print("Powers:", np.power(arr1, 2))
print("Standard Deviation:", arr1.std())`,
        whatItDoes: 'Squares each element in arr1 [36 9 81 256 400] and computes standard deviation (approx 6.305).',
        whyUsed: 'Power transformation and measure of dispersion from the mean.',
        howItWorks: 'np.power uses binary exponentiation; arr1.std() computes sqrt(mean(abs(x - x.mean())**2)).',
        connectionToSurrounding: 'Completes universal function demonstrations.',
        examRelevance: 'std() measures the spread of data points around the mean.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 4: Create Pandas Series and Data Frame from Various Inputs
  // --------------------------------------------------------------------------
  4: {
    objectiveEnrichment: {
      problemSolved: 'Data analysis requires labeled 1D vectors and 2D tables with named headers. Pandas provides Series (1D labeled arrays) and DataFrames (2D labeled tabular matrices) constructable from lists, dicts, and NumPy arrays.',
      overallMechanism: 'Constructs pd.Series from Python list and dictionary, and constructs 2D pd.DataFrame from dictionary of column lists and 2D NumPy ndarray with explicit column header names.',
      prerequisitesToUnderstand: 'Pandas library basics, Series vs DataFrame, key-value mappings, and tabular column structures.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-2',
        title: 'Import Pandas and NumPy',
        codeSnippet: `import pandas as pd
import numpy as np`,
        whatItDoes: 'Imports Pandas with standard alias "pd" and NumPy with alias "np".',
        whyUsed: 'Pandas is built directly on top of NumPy arrays, providing labeled tabular data structures.',
        howItWorks: 'Binds modules to global namespace.',
        connectionToSurrounding: 'Mandatory before calling pd.Series or pd.DataFrame.',
        examRelevance: 'The alias "pd" is the universal industry standard for Pandas.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-6',
        title: 'Create Pandas Series from Python List',
        codeSnippet: `series_from_list = pd.Series([10, 20, 30, 40, 50])
print("Series from List:")
print(series_from_list)`,
        whatItDoes: 'Creates a 1D labeled Pandas Series with default integer index (0, 1, 2, 3, 4) and values (10, 20, 30, 40, 50).',
        whyUsed: 'A Series is the fundamental 1D building block of Pandas (like a single spreadsheet column).',
        howItWorks: 'Stores data in an underlying NumPy array while generating an explicit RangeIndex.',
        connectionToSurrounding: 'First Series creation technique.',
        examRelevance: 'A Pandas Series has two components: an Index (left) and Values (right).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 8-10',
        title: 'Create Pandas Series from Python Dictionary',
        codeSnippet: `series_from_dict = pd.Series({"A": 100, "B": 200, "C": 300})
print("\nSeries from Dictionary:")
print(series_from_dict)`,
        whatItDoes: 'Creates a Series where dictionary keys ("A", "B", "C") become index labels, and values (100, 200, 300) become data.',
        whyUsed: 'Automatically generates custom named index labels without needing index=[...] argument.',
        howItWorks: 'Extracts keys into an Index object and values into an array buffer.',
        connectionToSurrounding: 'Shows labeled indexing.',
        examRelevance: 'When creating Series from dict, dictionary keys become the Series index.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 12-19',
        title: 'Create DataFrame from Python Dictionary of Lists',
        codeSnippet: `data = {
  'Name': ['Alice', 'Bob', 'Charlie'],
  'Age': [25, 30, 35],
  'City': ['New York', 'Los Angeles', 'Chicago']
}
df_from_dict = pd.DataFrame(data)
print("\nDataFrame from Dictionary:")
print(df_from_dict)`,
        whatItDoes: 'Creates a 3-row by 3-column DataFrame where dict keys become column headers and list values become column data.',
        whyUsed: 'The most intuitive and common way to construct in-memory tabular datasets in Python.',
        howItWorks: 'Pairs each key to a Series, ensuring all lists have equal length (3).',
        connectionToSurrounding: 'Constructs the first 2D tabular DataFrame.',
        examRelevance: 'All lists in the dictionary must have identical length, or a ValueError is raised.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 21-25',
        title: 'Create DataFrame from 2D NumPy Array with Column Names',
        codeSnippet: `data_array = np.array([["Alice", 25, "New York"], ["Bob", 30, "Los Angeles"],
                       ["Charlie", 35, "Chicago"]])
df_from_array = pd.DataFrame(data_array, columns=["Name", "Age", "City"])
print("\nDataFrame from NumPy Array:")
print(df_from_array)`,
        whatItDoes: 'Converts a raw 2D NumPy matrix into a labeled DataFrame with explicit column names ["Name", "Age", "City"].',
        whyUsed: 'Wraps raw computational matrices with human-readable column headers for downstream analysis.',
        howItWorks: 'Attaches an Index object for columns and default RangeIndex for rows.',
        connectionToSurrounding: 'Completes all 4 Pandas constructors.',
        examRelevance: 'Difference: Series is 1-dimensional (1 column); DataFrame is 2-dimensional (table with rows & columns).'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 5: Import CSV File to Pandas DataFrame and Perform Data Analysis
  // --------------------------------------------------------------------------
  5: {
    objectiveEnrichment: {
      problemSolved: 'Real-world data arrives as CSV spreadsheets. This comprehensive program covers the primary data analysis toolkit: loading CSV, head/tail inspection, dimensions/metadata, boolean filtering, column dropping, sorting, ranking, and statistical metrics.',
      overallMechanism: 'Uses pd.read_csv() to parse delimited disk data into memory, performs slicing (head/tail), queries metadata (.shape, .index, .columns), applies conditional boolean masks, mutates schema (.drop), and computes statistical aggregates (.mean, .median, .std).',
      prerequisitesToUnderstand: 'CSV file format, DataFrame indexing, boolean expressions (df["Age"] > 30), and basic statistics.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-2',
        title: 'Import Pandas and Read CSV File (pd.read_csv)',
        codeSnippet: `import pandas as pd
df = pd.read_csv('d:\\myfile.csv')`,
        whatItDoes: 'Loads Pandas and parses the CSV file from disk into memory as a 2D DataFrame named df.',
        whyUsed: 'Primary entry point for loading real-world tabular data from disks, databases, or web URLs.',
        howItWorks: 'C parser reads comma-delimited lines, infers column datatypes, and creates DataFrame.',
        connectionToSurrounding: 'Creates master DataFrame df used in all subsequent analysis steps.',
        examRelevance: 'In Windows paths, escape backslashes (\\\\) or use forward slashes (\'d:/myfile.csv\') to avoid syntax errors.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-8',
        title: 'Inspect First and Last Records (head(5) and tail(5))',
        codeSnippet: `# a. Visualize the first and last 5 records
print("First 5 records:")
print(df.head(5))
print("\nLast 5 records:")
print(df.tail(5))`,
        whatItDoes: 'Prints top 5 rows and bottom 5 rows of the DataFrame.',
        whyUsed: 'First mandatory step in exploratory data analysis (EDA) to verify column alignment and data validity.',
        howItWorks: 'head(n) slices rows from 0 to n; tail(n) slices rows from (len - n) to len.',
        connectionToSurrounding: 'Part (a) of the university syllabus question.',
        examRelevance: 'Default count for both head() and tail() if no argument is passed is 5 rows.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 10-13',
        title: 'Inspect Metadata: Shape, Index, and Columns',
        codeSnippet: `# b. Get the shape, index and column details
print("\nShape of the DataFrame:", df.shape) # Returns (rows, columns)
print("\nIndex of the DataFrame:", df.index) # Returns index
print("\nColumns of the DataFrame:", df.columns) # Column names`,
        whatItDoes: 'Displays dimension tuple (rows, columns), row index range, and list of column header names.',
        whyUsed: 'Provides structural dimensions of dataset without printing massive row tables.',
        howItWorks: '.shape returns tuple; .index returns Index object; .columns returns Index of column labels.',
        connectionToSurrounding: 'Part (b) of the practical syllabus.',
        examRelevance: 'Examiner favorite: df.shape is an ATTRIBUTE (no parentheses), NOT a function!'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 15-18',
        title: 'Conditional Boolean Filtering (df[df["Age"] > 30])',
        codeSnippet: `# c. Select/Delete records or columns based on conditions
selected_rows = df[df['Age'] > 30]
print("\nRows where 'Age' > 30:")
print(selected_rows)`,
        whatItDoes: 'Filters dataset to return only rows where the employee\'s Age column value is strictly greater than 30.',
        whyUsed: 'Extracts demographic cohorts and targeted segments.',
        howItWorks: 'df[\'Age\'] > 30 creates a boolean Series [True, False, ...]; outer df[...] keeps True rows.',
        connectionToSurrounding: 'First half of syllabus section (c).',
        examRelevance: 'Called "Boolean Indexing" or "Masking" in Pandas.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 20-22',
        title: 'Drop Column by Name (df.drop("City", axis=1))',
        codeSnippet: `df_dropped_column = df.drop('City', axis=1) # Drops the 'City' column
print("\nDataFrame after dropping 'City' column:")
print(df_dropped_column)`,
        whatItDoes: 'Removes the "City" column along the column axis (axis=1), returning a new DataFrame without that column.',
        whyUsed: 'Removes redundant, sensitive, or high-cardinality features during data preprocessing.',
        howItWorks: 'axis=1 targets vertical columns; axis=0 targets horizontal rows.',
        connectionToSurrounding: 'Second half of syllabus section (c).',
        examRelevance: 'Crucial viva question: Why specify axis=1? axis=0 means rows (default); axis=1 means columns. To drop a column, axis=1 is required.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 24-27',
        title: 'Sort DataFrame Values (sort_values by Age)',
        codeSnippet: `# d. Perform ranking and sorting operations
sorted_df = df.sort_values(by='Age', ascending=True)
print("\nDataFrame sorted by 'Age' (ascending):")
print(sorted_df)`,
        whatItDoes: 'Sorts all rows in ascending order based on the values in the "Age" column.',
        whyUsed: 'Orders data chronologically, alphabetically, or by numerical magnitude.',
        howItWorks: 'Reorders the row index pointers based on quicksort/mergesort algorithm on specified column.',
        connectionToSurrounding: 'First part of section (d).',
        examRelevance: 'To sort descending, set ascending=False.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 29-31',
        title: 'Compute Rank Series (df["Age"].rank())',
        codeSnippet: `df['Age Rank'] = df['Age'].rank()
print("\nDataFrame with 'Age Rank' column:")
print(df)`,
        whatItDoes: 'Computes numerical ranks for Age values (1.0 for lowest age, 2.0 for next, etc.) and adds as new column.',
        whyUsed: 'Enables non-parametric ranking and relative position analysis.',
        howItWorks: 'Assigns fractional ranks in case of ties by default (average rank).',
        connectionToSurrounding: 'Second part of section (d).',
        examRelevance: 'Adds a new column to df in place using column assignment syntax.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 33-45',
        title: 'Compute Statistical Operations (mean, median, std, min, max)',
        codeSnippet: `# e. Perform statistical operations on 'Age' column
mean_age = df['Age'].mean() # Mean
median_age = df['Age'].median() # Median
std_age = df['Age'].std() # Standard deviation
min_age = df['Age'].min() # Minimum value
max_age = df['Age'].max() # Maximum value

print("\nStatistical operations on 'Age' column:")
print(f"Mean: {mean_age}")
print(f"Median: {median_age}")
print(f"Standard Deviation: {std_age}")
print(f"Min: {min_age}")
print(f"Max: {max_age}")`,
        whatItDoes: 'Calculates the five essential descriptive statistics on the Age column: mean, median, standard deviation, min, max.',
        whyUsed: 'Fulfills syllabus requirement (e) for parametric and non-parametric data summaries.',
        howItWorks: 'Traverses valid numeric values, ignoring NaN missing entries automatically.',
        connectionToSurrounding: 'Concludes the 5-part data analysis workflow.',
        examRelevance: 'Difference between mean and median: Mean is sensitive to outliers; Median is robust against extreme outliers.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 6: Handle Missing Data (isnull, dropna, fillna)
  // --------------------------------------------------------------------------
  6: {
    objectiveEnrichment: {
      problemSolved: 'Real-world data contains missing entries (NaN/null). Machine learning algorithms fail if null values are passed. This program demonstrates detecting missing data, dropping incomplete rows, and imputing missing cells with column means.',
      overallMechanism: 'df.isnull().sum() counts nulls per column; df.dropna() discards any row containing nulls; df.fillna(df.mean()) computes column averages and replaces NaNs with those means.',
      prerequisitesToUnderstand: 'Missing data representations (NaN / null in pandas), row deletion vs imputation trade-offs.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-6',
        title: 'Import Libraries and Load Dataset with Missing Values',
        codeSnippet: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('d:/emp.csv')`,
        whatItDoes: 'Loads data science libraries and reads employee CSV dataset into DataFrame df.',
        whyUsed: 'Provides working dataset containing intentional null/NaN values.',
        howItWorks: 'Pandas automatically converts empty strings, "NA", "null", and "NaN" into np.nan floats.',
        connectionToSurrounding: 'Supplies raw data containing missing values for steps 2, 3, and 4.',
        examRelevance: 'Missing values in Pandas are represented as np.nan (float type).'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 7-8',
        title: 'Detect and Count Missing Values (df.isnull().sum())',
        codeSnippet: `print("Missing data in each column:")
print(df.isnull().sum())`,
        whatItDoes: 'Scans every column, creates a boolean mask where missing is True, and sums the True flags to report total null count per column.',
        whyUsed: 'Provides exact count of missing data to decide whether to drop or impute.',
        howItWorks: 'df.isnull() produces boolean table (True=1, False=0); .sum() sums along vertical axis (axis=0).',
        connectionToSurrounding: 'Informs decision for steps 3 and 4.',
        examRelevance: 'df.isna() is an identical alias for df.isnull().'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 10-12',
        title: 'Strategy 1: Drop Incomplete Rows (df.dropna())',
        codeSnippet: `df_dropped = df.dropna()
print("\nData after dropping rows with missing values:")
print(df_dropped.head())`,
        whatItDoes: 'Removes any row that contains at least one NaN value, returning a clean reduced DataFrame.',
        whyUsed: 'Simplest missing data handling strategy when dataset is large and missing rows are rare (<5%).',
        howItWorks: 'Discards any row vector containing any np.nan value across any column.',
        connectionToSurrounding: 'Shows deletion strategy.',
        examRelevance: 'Downside of dropna: Can discard large amounts of valuable data if many rows have one missing field.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 14-16',
        title: 'Strategy 2: Impute Missing Data with Column Mean (df.fillna(df.mean()))',
        codeSnippet: `df_filled = df.fillna(df.mean())
print("\nData after filling missing values with mean:")
print(df_filled)`,
        whatItDoes: 'Computes the arithmetic mean of each numeric column and substitutes that mean into any cell containing NaN.',
        whyUsed: 'Preserves all rows in the dataset while filling gaps with statistically neutral values (Mean Imputation).',
        howItWorks: 'df.mean() produces Series of averages; df.fillna() matches columns and fills NaNs.',
        connectionToSurrounding: 'Shows imputation strategy.',
        examRelevance: 'Viva distinction: When to drop vs impute? Drop if missingness is negligible; Impute (mean/median/mode) if preserving sample size is essential.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 7: Data Transformation (apply, map, vectorized strings)
  // --------------------------------------------------------------------------
  7: {
    objectiveEnrichment: {
      problemSolved: 'Raw datasets require feature engineering: recoding categories, conditional math transformations, and string normalization. This program demonstrates apply() with lambdas, map() with dictionaries, and vectorized .str accessors.',
      overallMechanism: 'df["Age"].apply(lambda) transforms numbers conditionally; df["City"].map(dict) maps full city names to abbreviations; df["City"].str.upper() executes vectorized string transformations.',
      prerequisitesToUnderstand: 'Python lambda anonymous functions, dictionary mappings, and Pandas .str accessor.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-6',
        title: 'Import Libraries and Load City Dataset',
        codeSnippet: `import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

df = pd.read_csv('d:/city.csv')`,
        whatItDoes: 'Loads libraries and reads city CSV dataset containing citizen names, ages, and city names.',
        whyUsed: 'Base dataset for demonstrating feature engineering.',
        howItWorks: 'Initializes DataFrame df in memory.',
        connectionToSurrounding: 'Supplies columns for transformation.',
        examRelevance: 'Standard initialization.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 8',
        title: 'Conditional Math Transformation via apply() and Lambda',
        codeSnippet: `df['Age Transformed'] = df['Age'].apply(lambda x: x * 2 if x < 30 else x + 5)`,
        whatItDoes: 'Applies an inline function to each Age value: if Age < 30, doubles it (x * 2); otherwise, adds 5 (x + 5).',
        whyUsed: 'Executes complex custom conditional logic row-by-row on a column.',
        howItWorks: 'Calls lambda function iteratively for each value in the Age Series and collects results into a new column.',
        connectionToSurrounding: 'Demonstrates the apply() method.',
        examRelevance: 'apply() is one of the most flexible transformation functions in Pandas.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 9-13',
        title: 'Categorical Mapping via map() with Dictionary',
        codeSnippet: `df['City Abbr'] = df['City'].map({'Mumbai': 'MUM', 'New Delhi': 'ND',
'Bangalore': 'BAN','Hyderabad':'HYD','Kolkata':'KOL'})

print("\nData with transformations using apply() and map():")
print(df[['Name', 'Age', 'Age Transformed', 'City', 'City Abbr']].head())`,
        whatItDoes: 'Recodes city strings into short uppercase abbreviations using a lookup dictionary mapping.',
        whyUsed: 'Converts long categorical labels into standardized codes for reports and models.',
        howItWorks: 'Looks up each cell value in dictionary; matches are replaced with dictionary values (unmatched become NaN).',
        connectionToSurrounding: 'Demonstrates the map() method.',
        examRelevance: 'Caution with map(): If a value in the column is NOT in the mapping dictionary, it becomes NaN.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 15-17',
        title: 'Vectorized String Operation (df["City"].str.upper())',
        codeSnippet: `df['City Uppercase'] = df['City'].str.upper()
print("\nData with vectorized string operations (city names in uppercase):")
print(df[['City', 'City Uppercase']].head())`,
        whatItDoes: 'Converts all city strings to uppercase (e.g. "Mumbai" -> "MUMBAI") using vectorized .str.upper().',
        whyUsed: 'Performs element-wise string transformations on entire Series without manual looping.',
        howItWorks: 'The .str accessor exposes Python string methods (upper, lower, replace, contains, split) directly to the Series.',
        connectionToSurrounding: 'Completes the trio of transformation methods.',
        examRelevance: 'The .str accessor handles missing values (NaN) automatically without raising AttributeErrors.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 8: Visualize Data Using Line Plots and Bar Plots
  // --------------------------------------------------------------------------
  8: {
    objectiveEnrichment: {
      problemSolved: 'Raw numbers in tables fail to convey trends quickly. Data visualization using Matplotlib communicates monthly performance and sales patterns clearly through combined bar charts and trend lines.',
      overallMechanism: 'Prepares month labels and sales figures. Uses plt.bar() for categorical sales volume bars and plt.plot() for trend line overlay, then decorates with titles, axis labels, legend, and displays with plt.show().',
      prerequisitesToUnderstand: 'Matplotlib pyplot module (plt), bar charts vs line plots, chart decoration (titles, labels, legend).'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'Import Matplotlib and Define Data Lists',
        codeSnippet: `import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr", "May"]
sales = [10, 15, 12, 18, 20]`,
        whatItDoes: 'Imports pyplot interface as plt, and creates lists of month names (categories) and corresponding sales numbers (metrics).',
        whyUsed: 'Supplies coordinates for data plotting.',
        howItWorks: 'Months act as discrete categorical X-axis; sales act as numerical Y-axis.',
        connectionToSurrounding: 'Passed into plt.bar and plt.plot in steps 2 and 3.',
        examRelevance: 'Both lists must have identical length (5 items).'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 6',
        title: 'Render Bar Plot (plt.bar)',
        codeSnippet: `plt.bar(months, sales, color="skyblue", alpha=0.7, label="Sales (Bar)")`,
        whatItDoes: 'Draws vertical sky-blue bars for each month with 70% opacity (alpha=0.7) and legend label.',
        whyUsed: 'Visualizes discrete categorical magnitudes for direct height comparison.',
        howItWorks: 'Renders rectangular patch for each (x, y) pair with height equal to sales value.',
        connectionToSurrounding: 'Acts as background volume bars beneath the trend line.',
        examRelevance: 'alpha controls transparency (0.0 fully transparent, 1.0 fully opaque).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 7',
        title: 'Overlay Line Plot with Markers (plt.plot)',
        codeSnippet: `plt.plot(months, sales, color="blue", marker="o", label="Sales (Line)")`,
        whatItDoes: 'Overlays a solid blue line connecting data points with circular dots (marker="o") on top of the bars.',
        whyUsed: 'Highlights direction of growth and monthly trajectory.',
        howItWorks: 'Connects data coordinates with linear line segments and draws point glyphs.',
        connectionToSurrounding: 'Demonstrates combining multiple plot types on a single axes canvas.',
        examRelevance: 'marker="o" places circular markers on each data point; marker="s" places squares.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 9-12',
        title: 'Add Title, Axis Labels, and Legend',
        codeSnippet: `plt.title("Sales Over Months")
plt.xlabel("Month")
plt.ylabel("Sales")
plt.legend()`,
        whatItDoes: 'Adds chart title, labels X-axis ("Month"), labels Y-axis ("Sales"), and compiles visual legend box.',
        whyUsed: 'Chart readability and self-documentation: plots without labels lose marks in practical exams.',
        howItWorks: 'plt.legend() inspects all artists with label="..." parameters and builds key box.',
        connectionToSurrounding: 'Decorates axes before rendering.',
        examRelevance: 'Strict exam rule: Always include title, xlabel, and ylabel on all visualization programs.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 13',
        title: 'Display Plot Window (plt.show)',
        codeSnippet: `plt.show()`,
        whatItDoes: 'Renders the complete graphical chart window onto the user\'s screen.',
        whyUsed: 'Displays figure and blocks execution until window is closed.',
        howItWorks: 'Launches GUI backend window (TkAgg/Qt) and paints vector plot elements.',
        connectionToSurrounding: 'Concludes visualization pipeline.',
        examRelevance: 'In standalone Python scripts, plots will NOT appear on screen without calling plt.show().'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 9: Visualize Data Using Histograms and Box Plots
  // --------------------------------------------------------------------------
  9: {
    objectiveEnrichment: {
      problemSolved: 'Understanding statistical distribution (skewness, modality, spread, and outliers) requires specialized exploratory plots. This program creates side-by-side subplots comparing a Histogram against a Box-and-Whisker Plot.',
      overallMechanism: 'Generates 200 normal random samples with np.random.normal(50, 10, 200). Divides figure canvas into two subplots (1 row, 2 cols). Left pane renders plt.hist() with 15 bins; right pane renders plt.boxplot() showing quartiles and whiskers.',
      prerequisitesToUnderstand: 'Normal (Gaussian) distribution, histogram bins, box plot 5-number summary (min, Q1, median, Q3, max), and Matplotlib subplots.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-5',
        title: 'Import Libraries and Seed Gaussian Random Data',
        codeSnippet: `import matplotlib.pyplot as plt
import numpy as np

np.random.seed(42)
data = np.random.normal(50, 10, 200)`,
        whatItDoes: 'Sets random seed 42 for reproducibility and generates 200 numbers from normal distribution with mean=50 and std=10.',
        whyUsed: 'Generates consistent synthetic dataset with known bell-curve characteristics.',
        howItWorks: 'Box-Muller transform generates normal random variates; seed(42) ensures identical numbers on every run.',
        connectionToSurrounding: 'Supplies data points plotted in both subplots.',
        examRelevance: 'np.random.seed ensures your output matches your lab manual sample output identically.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 7',
        title: 'Create Figure Canvas with Dimensions (figsize=(8, 4))',
        codeSnippet: `plt.figure(figsize=(8, 4))`,
        whatItDoes: 'Initializes a new figure window with aspect ratio 8 inches wide by 4 inches tall.',
        whyUsed: 'Allocates wide horizontal canvas needed for two side-by-side subplots.',
        howItWorks: 'Instantiates Figure object in Matplotlib.',
        connectionToSurrounding: 'Container for subplots 1 and 2.',
        examRelevance: 'figsize is specified as (width, height) in inches.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 9-11',
        title: 'Subplot 1: Frequency Histogram (plt.subplot(1, 2, 1) & plt.hist)',
        codeSnippet: `plt.subplot(1, 2, 1)
plt.hist(data, bins=15, color="skyblue", edgecolor="black")
plt.title("Histogram")`,
        whatItDoes: 'Activates left panel (1 row, 2 cols, index 1) and draws a 15-bin histogram of the data.',
        whyUsed: 'Visualizes frequency distribution, symmetry, and central tendency of the data.',
        howItWorks: 'Divides data range into 15 equal intervals (bins) and counts how many data points fall into each bin.',
        connectionToSurrounding: 'Left side of the comparative statistical dashboard.',
        examRelevance: 'edgecolor="black" draws clear vertical dividing lines between histogram bars.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 13-15',
        title: 'Subplot 2: Box-and-Whisker Plot (plt.subplot(1, 2, 2) & plt.boxplot)',
        codeSnippet: `plt.subplot(1, 2, 2)
plt.boxplot(data, vert=True, patch_artist=True)
plt.title("Box Plot")`,
        whatItDoes: 'Activates right panel and draws a vertical box plot highlighting median line, IQR box, whiskers, and fliers.',
        whyUsed: 'Provides 5-number summary and immediately reveals any outliers.',
        howItWorks: 'Box spans 25th percentile (Q1) to 75th percentile (Q3); orange line marks median; whiskers extend 1.5 * IQR.',
        connectionToSurrounding: 'Right side of comparative dashboard.',
        examRelevance: 'Crucial viva question: What does the box plot show? 5-number summary: Minimum, Q1 (25%), Median (50%), Q3 (75%), Maximum, and outlier points.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 17-18',
        title: 'Auto-adjust Layout and Display Figure (tight_layout & show)',
        codeSnippet: `plt.tight_layout()
plt.show()`,
        whatItDoes: 'Adjusts subplot padding to prevent overlapping titles and axis labels, then displays window.',
        whyUsed: 'Prevents clipping and ensures clean visual presentation.',
        howItWorks: 'Calculates bounding boxes and resizes subplot margins automatically.',
        connectionToSurrounding: 'Concludes program execution.',
        examRelevance: 'plt.tight_layout() is best practice whenever creating multiple subplots.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 10: Visualize Data Using Density Plots and Scatter Plots
  // --------------------------------------------------------------------------
  10: {
    objectiveEnrichment: {
      problemSolved: 'Bivariate relationships require scatter plots to inspect correlation, while continuous distributions require smooth Kernel Density Estimation (KDE) density plots rather than discrete histogram bins.',
      overallMechanism: 'Part 1 creates correlated data and renders plt.scatter(x, y) with transparency. Part 2 uses Seaborn\'s sns.kdeplot(x=data, fill=True) to compute and shade Gaussian kernel smoothed density curves.',
      prerequisitesToUnderstand: 'Scatter plots for bivariate correlation, Seaborn statistical visualization library, and Kernel Density Estimation (KDE).'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-3',
        title: 'Import NumPy, Matplotlib, and Seaborn',
        codeSnippet: `import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns`,
        whatItDoes: 'Loads numerical array engine (NumPy), base plotting engine (Matplotlib), and statistical theme library (Seaborn).',
        whyUsed: 'Seaborn provides high-level statistical plots like KDE curves on top of Matplotlib.',
        howItWorks: 'Binds modules to standard aliases.',
        connectionToSurrounding: 'Prepares environment for both plot parts.',
        examRelevance: 'Seaborn is built directly on top of Matplotlib.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 5-8',
        title: 'Generate Correlated 2D Bivariate Data',
        codeSnippet: `# Part 1: Simple Scatter Plot
np.random.seed(42)
x = np.random.normal(5, 2, 100)
y = 0.5 * x + np.random.normal(0, 1, 100)`,
        whatItDoes: 'Generates 100 random values for x, and creates y with a positive linear correlation to x plus Gaussian noise.',
        whyUsed: 'Provides synthetic bivariate dataset with realistic scatter and linear trend.',
        howItWorks: 'y has equation y = 0.5x + epsilon, generating a moderately strong positive correlation.',
        connectionToSurrounding: 'Coordinates used for scatter plot in step 3.',
        examRelevance: 'Demonstrates simulating correlated experimental measurements.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 10-14',
        title: 'Plot Scatter Chart with Transparency and Labels',
        codeSnippet: `plt.scatter(x, y, color="royalblue", alpha=0.6)
plt.title("Simple Scatter Plot")
plt.xlabel("X Value")
plt.ylabel("Y Value")
plt.show()`,
        whatItDoes: 'Renders circular point markers for each (x, y) pair with 60% opacity, sets labels, and shows the scatter plot window.',
        whyUsed: 'Visualizes the relationship, clustering, and correlation between two continuous variables.',
        howItWorks: 'Draws dot at each Cartesian coordinate; alpha=0.6 prevents overlapping points from masking density.',
        connectionToSurrounding: 'Concludes Part 1 of the lab program.',
        examRelevance: 'Positive slope indicates positive correlation: as X increases, Y tends to increase.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 16-18',
        title: 'Generate Univariate Sample for Density Plot',
        codeSnippet: `# Part 2: Density Plot
np.random.seed(42)
data = np.random.normal(50, 10, 200)`,
        whatItDoes: 'Seeds RNG and creates 200 normally distributed samples with mean 50 and standard deviation 10.',
        whyUsed: 'Provides univariate continuous data for density estimation.',
        howItWorks: 'Creates normal distribution array.',
        connectionToSurrounding: 'Passed into Seaborn KDE plot in step 5.',
        examRelevance: 'Same distribution parameters as Program 9 for direct comparability.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 20-22',
        title: 'Render Smooth Kernel Density Plot (sns.kdeplot)',
        codeSnippet: `sns.kdeplot(x=data, fill=True, color="teal", alpha=0.5)
plt.title("Density Plot")
plt.show()`,
        whatItDoes: 'Estimates continuous probability density function using Gaussian kernels, shades the area beneath the curve in teal, and displays window.',
        whyUsed: 'Provides a smooth, continuous estimate of probability density without arbitrary bin boundaries.',
        howItWorks: 'Places Gaussian kernel at each data point and sums them to produce smooth probability density curve.',
        connectionToSurrounding: 'Concludes Part 2 and the entire Major 14 syllabus.',
        examRelevance: 'Viva question: What does the area under a KDE density curve equal? Exactly 1.0 (100% total probability).'
      }
    ]
  }
};

// Apply enrichments
const updatedPrograms: ProgramData[] = DATA_SCIENCE_LAB_PROGRAMS.map(program => {
  const enrichment = major14Enrichments[program.programNumber];
  if (!enrichment) return program;

  return {
    ...program,
    objective: {
      ...program.objective,
      problemSolved: enrichment.objectiveEnrichment.problemSolved,
      overallMechanism: enrichment.objectiveEnrichment.overallMechanism,
      prerequisitesToUnderstand: enrichment.objectiveEnrichment.prerequisitesToUnderstand
    },
    steps: enrichment.granularSteps
  };
});

// Format as TypeScript output
const fileHeader = `import { ProgramData } from '../types';

export const DATA_SCIENCE_LAB_PROGRAMS: ProgramData[] = `;

const tsContent = fileHeader + JSON.stringify(updatedPrograms, null, 2) + ';\n';

fs.writeFileSync('src/data/dataSciencePrograms.ts', tsContent, 'utf-8');
console.log('Successfully upgraded Major 14: all 10 programs enriched with granular line steps and objectives!');
